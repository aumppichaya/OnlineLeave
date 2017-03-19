const frameModule = require("ui/frame");
const dialogModule = require("ui/dialogs");
const appSetting = require("application-settings");


let page;
let Observable = require("data/observable").Observable;
let pageData = new Observable({
    stdCode:"",
    stdPwd:"",
});
exports.pageLoaded = (args)=>{
    page = args.object;
    page.bindingContext = pageData;
};

exports.doLogin=()=>{
    console.dump(pageData);
    if((pageData.get("stdCode")=="6039010001")&&(pageData.get("stdPwd")=="12345")){
        stdData = {
            stdCode : "6039010001",
            stdName : "ทดสอบ สร้างแอพ",
            stdTeacher : "คุณครู ที่ปรึกษา",
            stdClass:"ส.1 ทส. 1",
        }
        appSetting.setString("student",JSON.stringify({stdData}))
        frameModule.topmost().navigate("views/Lhistory/Lhistory");
    }else{
        dialogModule.alert({
            message:"ไม่สามารถเข้าระบบได้",
            okButtonText:"ตกลง",
        })
    }
};