const app = require('./config/server')
const dbConnection = require('./config/dbConnection')

//app.use(express.static(__dirname +'/public'))
//Rotas

app.get('/', function(req, res){
    //let pagina = '<html><head><title>Página de disciplina Web</title></head><body><h1>Página de Disciplina Web Teste</h1><h2>Teste</h2></body></html>';
    //res.send(pagina);
     res.render('home')
})

app.get('/estudante',function(req, res){
    //let pagina = '<html><head><title>Página de disciplina Web</title></head><body><h1>Página do Estudante</h1></body></html>';
    //res.send(pagina);
    let connection = dbConnection();
        
    let sql = 'select * from estudantes'
    connection.query(sql, function(err, result){
        res.send(result)
    });
    // res.render("estudantes")
})


app.get('/professor', function(req, res){
     let connection = dbConnection();
        
    let sql = 'select * from professores'
    connection.query(sql, function(err, result){
        res.send(result)
       
    });
   //  res.render('professores')
})

app.get('/conteudo', function(req, res){
     let connection = dbConnection();
         
     let sql = 'select * from  conteudoprogramatico'
     connection.query(sql, function(err, result){
         res.send(result)
        
     });
     //res.render('conteudo')
 })

