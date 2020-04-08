const route = require('express').Router();

route.get('/test',(req,res)=>{console.log("Inside test route");res.send('{"Ferozalla":"shaik"}')});
module.exports=route;
