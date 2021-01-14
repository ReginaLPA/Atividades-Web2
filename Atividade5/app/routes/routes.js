//Rotas
const { resolveInclude } = require('ejs');
const dbConnection = require('../../config/dbConnection')
module.exports = {
    rotaHome: function(app){
        app.get('/', function(req, res){
        res.render('home')
        });
},
    rotaEstudante: function(app){
        let controllersEstudantes = require('../controllers/estudantes')
        app.get('/estudantes',function(req, res){
            //let pagina = '<html><head><title>Página de disciplina Web</title></head><body><h1>Página do Estudante</h1></body></html>';
            //res.send(pagina); 
            controllersEstudantes.estudantesListar(app,req,res)   
            
        
    })
    },

    rotaProfessor: function(app){
        let controllersProfessores = require('../controllers/professores')
        app.get('/professores', function(req, res){
            controllersProfessores.professoresListar(app,req,res)
            
          
    })
    },

    rotaConteudo: function(app){
        let controllersConteudo = require('../controllers/conteudo')
        app.get('/conteudo', function(req, res){
            controllersConteudo.conteudoListar(app,req,res)
            //res.render('conteudo')
    })
    }

}
  
