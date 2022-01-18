const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

dotenv.config();
const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cookieParser());
// ejs setting
app.set( 'view engine', 'ejs');
app.set( 'views', __dirname + '/views');

app.set('port', process.env.PORT || 9999);

const indexRouter = require('./routes');
const userRouter =require("./routes/userRouter");
app.use(indexRouter.user, userRouter);

// sequelize 연결
sequelize.sync({ force: false })
    .then(()=>{
        console.log("db 연결");
    })
    .catch((err)=>{
        console.log('db 연결 x');
        console.log(err);
    });

app.use(morgan('dev'));

// user 등록 페이지로 이동
app.get('/',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.cookie('name','test',{
        expires: new Date(),
        httpOnly : true,
        path : '/',
    });
    res.clearCookie('name','test',{
        httpOnly : true,
        path : '/',
    });
    res.render('test');
});

// test1 ok 출력
app.get('/test1',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send('test1 OK');
});

// test:ok json으로 출력
app.get('/test2',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({'test':'ok'});
});

app.get('/hc.check/_ah/health',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
});


app.listen(app.get('port'),()=>{
    console.log('서버 실행');
});