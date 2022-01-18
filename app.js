const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');
const fs = require('fs');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const { sequelize } = require('./models');

const app = express();

// ejs setting
app.set( 'view engine', 'ejs');
app.set( 'views', __dirname + '/views');

app.set('port', process.env.PORT || 9999);

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const { resolveSoa } = require('dns');

app.use('/',indexRouter);
app.use('/user',userRouter);


sequelize.sync({ force: false })
    .then(()=>{
        console.log("db 연결");
    })
    .catch((err)=>{
        console.log('db 연결 x');
        console.log(err);
    });

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/hc.check/_ah/health',(req,res)=>{
    // res.sendFile(path.join(__dirname, 'health.ejs','utf-8',(err,data)=>{
    //     res.writeHead(200,{'Context-Type' : 'text/html'});
    //     res.end(data);
    // }));
    res.status(200);
});


app.listen(app.get('port'),()=>{
    console.log('서버 실행');
});