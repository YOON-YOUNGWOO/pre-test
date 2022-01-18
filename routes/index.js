const express =require('express');

const router = express.Router();

// get 라우터
router.get('/',(req,res)=>{
    res.render('test');
});

router.get('/test1',(req,res)=>{
    res.send('test1 OK');
});

router.get('/test2',(req,res)=>{
    res.json({'test':'ok'});
});

module.exports = router;