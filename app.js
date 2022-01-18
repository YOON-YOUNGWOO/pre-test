const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');

dotenv.config();
const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// ejs setting
app.set( 'view engine', 'ejs');
app.set( 'views', __dirname + '/views');

app.set('port', process.env.PORT || 9999);

const indexRouter = require('./routes');
const userRouter =require("./routes/userRouter");
app.use(indexRouter.user, userRouter);
//const userRouter = require('./routes/user');


//app.use('/',indexRouter);
//app.use('/user',userRouter);


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



app.get('/',(req,res)=>{
    res.render('test');
});

app.get('/test1',(req,res)=>{
    res.send('test1 OK');
});

app.get('/test2',(req,res)=>{
    res.json({'test':'ok'});
});

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