"use strict"
const request = require("../dependencies").request;

 function getResults(opt,callback){
   request(
        {uri:opt.host+opt.path,
        method:"GET"},
        (error,response,body)=>{
            let data=JSON.parse(body);
       callback(data);
     })
}

exports.getResults = getResults