//Rotas
const { resolveInclude } = require('ejs');
const { response } = require('express');
const {check, validationResult} = require('express-validator')
const dbConnection = require('../../config/dbConnection')

const controllersEstudantes = require('../controllers/estudantesController')
const controllersProfessores = require('../controllers/professoresController')
let controllersConteudo = require('../controllers/conteudoController')

module.exports = {
    rotaHome: function(app){
        app.get('/', function(req, res){
        res.render('home')
        });
},
    rotaEstudante: function(app){
            app.get('/estudante',function(req, res){
            //let pagina = '<html><head><title>Página de disciplina Web</title></head><body><h1>Página do Estudante</h1></body></html>';
            //res.send(pagina); 
            controllersEstudantes.estudantesListar(app,req,res)   
            
        
    })
    },
    rotaInsereEstudante: function(app){
        app.get('/insereestudante',function(req,res){
            res.render('admin/InsereEstudante',{estudante:{},erros:{} });
        })

    },

    rotaEstudanteSalvar: function(app){
        app.post('/estudante/salvar',[
            check('nome').isLength({min:5}).withMessage('Nome deve ter no mínimo 5 carcteres'),
            check('cidade').isLength({min:2}).withMessage('Cidade deve ter no mínimo 3 carcteres'),
            check('datanascimento').isLength({min:1}).withMessage('Data é obrigatório'),
            check('nota').isLength({min:1}).withMessage('Nota é obrigatório').isNumeric().withMessage('Nota deve ser nemérico')

        ],function (req,res) { 
            const errors = validationResult(req)
            controllersEstudantes.estudanteSalvar(app,req,res,errors)    

        });
    },


 // rotas professor
    rotaProfessor: function(app){
        app.get('/professor', function(req, res){
            controllersProfessores.professoresListar(app,req,res)
            
          
    })
    },

    rotaInsereProfessor: function(app){
        app.get('/insereprofessor',function(req,res){
            res.render('admin/InsereProfessor',{professor:{},erros:{} });
        })

    },

    rotaProfessorSalvar: function(app){
         app.post('/professor/salvar',[
            check('nome').isLength({min:5}).withMessage('Nome deve ter no mínimo 5 carcteres'),
            check('titulacao').isLength({min:5}).withMessage('Título deve ter no mínimo 3 carcteres'),
            check('cidade').isLength({min:1}).withMessage('Cidade é obrigatório'),
            check('datanascimento').isLength({min:1}).withMessage('Data é obrigatório')

        ],function (req,res) { 
            const errors = validationResult(req)
            controllersProfessores.professorSalvar(app,req,res,errors)    

        });
    },
 

    rotaConteudo: function(app){
        app.get('/conteudo', function(req, res){
            controllersConteudo.conteudoListar(app,req,res)
            //res.render('conteudo')
    })
    },

    rotaInsereConteudo: function(app){
        app.get('/insereconteudo',function(req,res){
            res.render('admin/InsereConteudo',{estudante:{},erros:{} });
        })

    },
    rotaConteudoSalvar: function(app){
        app.post('/conteudo/salvar',[
         // check('conteudoprogramatico').isLength({min:5}).withMessage('Conteúdo deve ter no mínimo 5 carcteres'),
           
         
          
          

       ],function (req,res) { 
           const errors = validationResult(req)
           controllersConteudo.conteudoSalvar(app,req,res,errors)    

       });
   },
    

}
  
