/******************************************
 *  Author : Author   
 *  Created On : Sat Sep 02 2017
 *  File : client.js
 *******************************************/
var http = require('http');
let util = require('util');
http.get('http://www.imooc.com/index/getstarlist',function(res) {
     let data='';
    res.on("data",function(chunk){
        data+=chunk;
    });
    res.on("end",function(){
        let result=JSON.parse(data);
 
        console.log("result:"+util.inspect(result));
    })



})