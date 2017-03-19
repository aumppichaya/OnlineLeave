const frameModule = require   ("ui/frame");
const test = require("nativescript-radiobutton")

let page;

exports.pageLoaded = function(args) {
    page = args.object;
   // page.bindingContext = pageData;
};

exports.goBack=()=>{
    frameModule.topmost().navigate("views/Lhistory/Lhistory");
};