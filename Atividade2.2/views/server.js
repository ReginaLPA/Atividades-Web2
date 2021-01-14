const express = require('express')
const app = express()
//const path = require("path")
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")


//config
// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


 

// configura pasta publica
//app.use(express.static(path.join(__dirname,"public"))
//app.use(express.static("/public"))
//app.use(express.static(__dirname + '/public/'));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//rotas
/*
app.get('/teste', function (req, res) {
  res.send('Hello World teste regina')
})

/*
//carregar arquivo html
app.get("/",(req,res)=>{
    //res.sendFile(__dirname +"/views/index.html")
    res.render("index.html")
})

app.get("/res",(req,res)=>{
  //res.sendFile(__dirname +"/views/res.html")
  res.render("res.html")
})
*/
app.get('/res',function(req,res){
  //res.sendFile(__dirname +"/src/views/index.html")
    res.render('res');
});

app.get('/form',function(req,res){
  //res.sendFile(__dirname +"/src/views/index.html")
    res.render('form');
});

app.post('/add-form', function(req, res){ 
  //res.sendFile(__dirname +"/views/res.html"("Nome: " + req.body.tname + "<br>Data Nascimento: " + req.body.dtnasc + "<br>"))
  res.send("Nome: " + req.body.nome + "<br>Data Nascimento: " + req.body.dtnasc + "<br>") 
  res.send('Formulario recebido')

})
 
app.listen(8080)