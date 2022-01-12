const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello');
});

app.listen(9999,()=>{
    console.log('서버 실행');
});