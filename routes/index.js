const axios = require('axios');
var express = require('express');
const fs = require('fs');
// const Results = require('../models/id_card_validation_results');
var router = express.Router();
const FormData = require('form-data');
const { dirname } = require('path');
const logger = require('../winston');



const QURAM_SERVER =
  'http://ec2-3-35-3-47.ap-northeast-2.compute.amazonaws.com:9091/scan/id-auto';
const USEB_AUTH_SERVER = 'https://auth.useb.co.kr/oauth/token';
const USEB_STATUS_SERVER = "https://api3.useb.co.kr/status/"
const USEB_TOKEN =
  'YTk4ZTM4MzI4NjliZTlhOGM3YTFmMDc5ZDI0MTBiYzk6MGMwNmEyOGVjNzQxNGE5ZjM5Zjc2MDI0NDU5NGFmMDY';
const IDCARD_TYPE = {
  DRIVER: { name:  'DRIVER_LICENSE', route: "driver"},
  IDCARD: {name:'RESIDENT_REGISTRATION', route: 'idcard'},
  PASSPORT: {name:'여권', route: 'passport'},
  ALIEN: {name:'외국인등록증', route: 'alien'},
};




/* GET home page. */
router.get('/', async function (req, res, next) {


  const fileList = fs.readdirSync(__dirname + '/../img_files')
  .filter((item) => item.includes('.jpg') || item.includes('.jpeg'));

  let interval;
  let count = 0;

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


  try {



     async function performanceTest(){
      console.log("반복 실행 중", count , "번째")
      if(count >= fileList.length){
        console.log("반복 완료")
        return;
      }
      const logData = {};


      var data = new FormData();
      const file = fileList[count]
      count += 1;
      data.append('files', fs.createReadStream(`img_files/${file}`));
      var config = {
        method: 'post',
        url: QURAM_SERVER,
        headers: {
          ...data.getHeaders(),
        },
        data: data,
      };

      await axios(config)
        .then(async function (response) {
          const { result_scan_type: idcard_type, id: ocr_result } =
            response.data;
            logData.ocr = ocr_result



          let request_body;
          switch (idcard_type) {
            case IDCARD_TYPE.IDCARD.name:
              request_body = {
                identity: ocr_result.jumin.replaceAll('-',""),
                issueDate: ocr_result.issued_date.replaceAll('.',"") ,
                userName:ocr_result.name
              }
              const { data : idcard_result} =  await axios.post(USEB_STATUS_SERVER + IDCARD_TYPE.IDCARD.route, request_body,
                  {headers:{
                    Authorization: `Bearer ${token}`
                  }}
                  )
                  logData.status = idcard_result
              console.log(idcard_result)

              break;
            case IDCARD_TYPE.DRIVER.name:


              request_body = {
                licenseNo: ocr_result.driver_license.driver_number,
                birthDate: '19' + ocr_result.jumin.split('-')[0] ,
                userName:ocr_result.name
              }

              const { data : drvier_result} =  await axios.post(USEB_STATUS_SERVER + IDCARD_TYPE.DRIVER.route, request_body,
                  {headers:{
                    Authorization: `Bearer ${token}`
                  }}
                  )
              console.log(drvier_result)
              logData.status = drvier_result
              break;
            default:
              logData.ocr = {success : false, error : "운전면허증 또는 주민등록증이 아님", resonse_data : response.data};
          }

        })
        .catch(function (error) {
          logData.status = {error: error.response?.data};
          console.log('error is', error);
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
