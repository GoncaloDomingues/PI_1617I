"use strict"
const http = require("../dependencies").http;

exports.httpRequest = function(opt,callback){
    let request = http.request(opt,function(res){
            let result = "";
            res.on("error",callback);
            res.on("data",function(d){
                result+=d;
            });
            res.on("end",()=>callback(null,result));
        });
        request.end();
}