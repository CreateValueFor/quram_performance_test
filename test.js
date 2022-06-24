const fs = require("fs")  
const FormData = require('form-data')
const axios = require("axios")

const QURAM_SERVER = "http://ec2-3-35-3-47.ap-northeast-2.compute.amazonaws.com:9091/scan/id-auto"

const performanceTest = async  () => {
    const fileList = fs.readdirSync(__dirname +  "/img_files").filter(item => item.includes(".png"))
    
    try {
      await Promise.all(fileList.map(async file=> {
        const formData = new FormData();
      // formData.append('id', 1);
      formData.append('file', fs.createReadStream(`img_files/${file}`));
      // formData.append('string', 'Text we want to add to the submit');
        // const image = await fs.readFileSync(`img_files/${file}`,(err)=>{console.log(err)})
        // const formData = new FormData();
  
  
        // formData.append('file', image,'out.png');
        const request_config = {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          data: formData
        };
        
        const ocr_result = await axios.post(QURAM_SERVER, formData,{
          headers:formData.getHeaders()
        })
        console.log(ocr_result)
      }))
    }catch(err){
      if(err && err.response){
        console.log(err.response.data)
        // return res.json({
        //   err: err.response
        // })
      }else {
        console.log(err)
      }
  
    }

}
performanceTest();