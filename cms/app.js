const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const newsRouter = require('./routes/news');

app.set("view engine", "ejs");

//bodyParser設定
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use("/newsrouter", newsRouter);

app.get('/',(req, res)=>{
    res.render('index.ejs');
})
app.get('/news',(req, res)=>{
    res.render('news.ejs');
})
app.get('/newsCreate', (req, res)=>{
    res.render('newsCreate.ejs');
})
app.get('/newsUpdate',(req, res)=>{
    res.render('newsUpdate.ejs');
})
app.listen(5000, ()=>{
    console.log("server started");
})