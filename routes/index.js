const axios = require('axios');
var express = require('express');
const fs = require('fs');
// const Results = require('../models/id_card_validation_results');
var router = express.Router();
const FormData = require('form-data');
const { dirname } = require('path');
const logger = require('../winston');



const QURAM_SERVER =
  'http://ec2-3-35-3-47.ap-northeast-2.compute.amazonaws.com:9091/scan/';
const USEB_AUTH_SERVER = 'https://auth.useb.co.kr/oauth/token';
const USEB_STATUS_SERVER = "https://api3.useb.co.kr/status/"
const USEB_TOKEN =
  'YTk4ZTM4MzI4NjliZTlhOGM3YTFmMDc5ZDI0MTBiYzk6MGMwNmEyOGVjNzQxNGE5ZjM5Zjc2MDI0NDU5NGFmMDY';
const IDCARD_TYPE = {
  DRIVER: { name:  'DRIVER_LICENSE', route: "driver"},
  IDCARD: {name:'RESIDENT_REGISTRATION', route: 'idcard'},
  PASSPORT: {name:'PASSPORT', route: 'passport'},
  ALIEN: {name:'외국인등록증', route: 'alien'},
};


/* GET home page. */
router.get('/', async function (req, res, next) {

  const fileList = fs.readdirSync(__dirname + '/../img_files')
  .filter((item) => item.includes('.jpg') || item.includes('.jpeg'));

  let interval;
  let count = 0;

  // get Useb Api Token to use Useb status api
  const {
    data: { jwt: token },
  } = await axios.post(
    USEB_AUTH_SERVER,
    {},
    {
      headers: {
        Authorization: `Bearer ${USEB_TOKEN}`,
      },
    }
  );

  // create axios instance to use Useb Api Token
  const status = axios.create({
    baseURL: USEB_STATUS_SERVER,
    headers:{
      common: {
        Authorization: `Bearer ${token}`  
      }
    }
  })

  try {
     async function performanceTest(){
      
      if(count >= fileList.length){
        console.log("반복 완료")
        return;
      }
      console.log("반복 실행 중", count + 1 , "번째")

      // initialize loop data
      const logData = {};
      const file = fileList[count]
      var data = new FormData();
      data.append('files', fs.createReadStream(`img_files/${file}`));
      count += 1;
      
      
      let config = {
        method: 'post',
        url: QURAM_SERVER + "id-auto",
        headers: {
          ...data.getHeaders(),
        },
        data: data,
      };

      await axios(config)
        .then(async function (response) {
          const { result_scan_type: idcard_type, id: ocr_result } = response.data;
          logData.ocr = ocr_result
          let request_body;
          let route = "";
          

          switch (idcard_type) {
            case IDCARD_TYPE.IDCARD.name:
              console.log("주민등록증")
              request_body = {
                identity: ocr_result.jumin.replaceAll('-',""),
                issueDate: ocr_result.issued_date.replaceAll('.',"") ,
                userName:ocr_result.name
              }
              route = IDCARD_TYPE.IDCARD.route

              break;
            case IDCARD_TYPE.DRIVER.name:
              console.log("운전면허증")
              request_body = {
                licenseNo: ocr_result.driver_license.driver_number,
                birthDate: '19' + ocr_result.jumin.split('-')[0] ,
                userName:ocr_result.name
              }
              route = IDCARD_TYPE.DRIVER.route
              break;
            default:
              console.log("주민등록증 혹은 운전면허증이 아님")
              var data = new FormData();
              data.append('files', fs.createReadStream(`img_files/${file}`));
              let config = {
                method: 'post',
                url: QURAM_SERVER + "passport",
                headers: {
                  ...data.getHeaders(),
                },
                data: data,
              };


              await axios(config)
                .then(async function (response){
                  const {id: passport_result} = response.data;
                  logData.ocr = passport_result;
                  if(response.data?.result_scan_type === IDCARD_TYPE.PASSPORT.name){
                    request_body = {
                      userName:passport_result.passport.name_kor,
                      passportNo : passport_result.passport.passport_number,
                      issueDate: passport_result.issued_date.replaceAll('.',"") ,
                      expirationDate: passport_result.passport.expiry_date.replaceAll('.',"") ,
                      birthDate: '19' + passport_result.passport.birthday
                    }
                    console.log("request body is ",request_body)
                    route = IDCARD_TYPE.PASSPORT.route
                  }else {
                    logData.ocr = {success : false, error : "운전면허증 또는 주민등록증 또는 여권이 아님", resonse_data : error.response.data, fileName: file};
                  }
                })
                .catch(function (error){
                  console.log(error.response?.data)
                  logData.ocr = {success : false, error : "운전면허증 또는 주민등록증이 아님", resonse_data : error.response.data, fileName: file};
                })

              
          }
          
          const { data : status_result } =  await status.post(route, request_body)
          console.log(status_result)
          logData.status = status_result;
          

        })
        .catch(function (error) {

          logData.status = {error: error.response?.data};
          console.log('error is', error.response?.data);
        });
        await fs.appendFileSync("./test.txt", ","+ JSON.stringify(logData), err => {
          if(err){
            console.error(err)
            return
          }
        })
        performanceTest();
        // logger.info(JSON.stringify(logData))

    }
    performanceTest()


    // await Promise.all(
    //   fileList.map(async (file,idx) => {



    //   })
    // );
  } catch (err) {
    if (err && err.response) {
      console.log(err.response.data);
      // return res.json({
      //   err: err.response
      // })
    } else {
      console.log('70', err);
    }
  }

  console.log(fileList);
  // const formData = new FormData();
  // formData.append('file',)

  // await axios.post()

  return res.json({
    data: "hello",
  });
});

module.exports = router;
