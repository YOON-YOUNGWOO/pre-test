const express = require('express');
const  User  = require('../models/user');


const router = express.Router();
// 전체 유저 불러오기 ok
//curl 13.124.21.247:9999/user
router.get('/',async (req,res)=>{
    console.log('user get');
    try{
        const users = await User.findAll();
        res.json(users);
    }catch(err){
        console.log(err);
    }
});

// 새로운 유저 생성하기
/*
    index : BIGINT UNSIGNED autoincrement
    userName : char(64)
    userDesc : text
    hasCat : boolean
*/
// insert into users(userName, userDesc, hasCat) values('abc','ccc',true);
router.post('/',async (req,res)=>{
    console.log('일단 여기는 들어옴');
    console.log(req.params);
    
    try{
        const user = await User.create({
            userName : req.body.userName,
            userDesc : req.body.desc,
            hasCat : req.body.hascat,
        });
        console.log(user);
        res.status(201).json(user);
    }catch(err){
        console.log(err);
    }
});

// 해당 유저가 고양이 있는가 확인하기 ok
//curl 13.124.21.247:9999/user/1/hasCat
router.get('/:userIndex/hasCat',async (req,res)=>{
    try{
        const user = await User.findOne({
            attributes:['userName','hasCat'],
            where:{
                index : req.params.userIndex,
            }
        });
        res.json(user);
    }catch(err){
        console.log(err);
    }

});

// 해당 유저 고양이 유무 수정하기
//curl -X POST 13.124.21.247:9999/user/1/hasCat
router.post('/:userIndex/hasCat',async (req,res)=>{
    try{
        const user = await User.findOne({
            attributes:['hasCat'],
            where:{
                index : req.params.userIndex,
            }
        });
        
        let hascat = user.dataValues.hasCat ? false:true;

        const result = await User.update({
            hasCat : hascat,
            where:{
                index : req.params.userIndex,
            },
        });
        res.json(result);
    }catch(err){
        console.log(err);
    }
    console.log('user index post');
});

// 해당 유저 삭제하기 ok
// curl -X DELETE 13.124.21.247:9999/user/3

router.delete('/:userIndex',async (req,res)=>{
    console.log(req.params.userIndex);
    try{
        const result = await User.destroy({
            where:{
                index : req.params.userIndex
            }
        });
        res.json(result);
    }catch(err){
        console.log(err);
    }
});


module.exports = router;