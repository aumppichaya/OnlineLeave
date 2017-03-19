var dialogsModule = require("ui/dialogs");
var observableModule = require("data/observable")
var ObservableArray = require("data/observable-array").ObservableArray;
const frameModule = require   ("ui/frame");
const appSetting = require("application-settings");
var page;

let student = JSON.stringify(appSetting.getString("student","{}"));
console.dump(student);


var pageData = new observableModule.fromObject({
    leaveList: new ObservableArray([
        { name: "ลาป่วย",date:"20 มี.ค. 60",status:"รอพิจารณา" },
        { name: "ลาป่วย",date:"18 มี.ค. 60",status:"ไม่อนุญาต" },
        { name: "ลากิจ",date:"18 ก.พ. 60",status:"อนุญาต" },
        { name: "ลาป่วย",date:"3 ม.ค. 60",status:"อนุญาต" },
        { name: "ลากิจ",date:"28-30 ธ.ค. 59",status:"ไม่อนุญาต" },
    ]),
    stdCode : student.stdCode,
    stdName : student.stdName,
    stdTeacher : student.stdTeacher,
    stdClass : student.stdClass,
});

exports.pageLoaded = function(args) {
    page = args.object;
    page.bindingContext = pageData;
};

exports.goBack=()=>{
    frameModule.topmost().navigate("views/login/login");
};

exports.addLeave=()=>{
    frameModule.topmost().navigate("views/newleave/newleave");
};