let express = require('express')
let app = express()
let port = 3000

//template engine ejs
app.set('view engine', 'ejs')

//carregar arquivos staticos
//app.use(express.static('public'))
//app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log('Servidor rodando na porta',port)
    
})

module.exports = app;