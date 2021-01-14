const express = require('express')
const app = express()
//const path = require("path")
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")


//config
// Template Engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



//config bodyParser para receber conteúdo
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


//rotas
app.get('/cad', function (req, res) {
  res.render('formulario')
})

app.post('/add',function(req,res){
  res.send("Formulário recebido! <br> Nome:  " + req.body.nome + "<br>Data Nascimento:  " + req.body.dtnasc + "<br>") 
    
});

app.listen(3000)