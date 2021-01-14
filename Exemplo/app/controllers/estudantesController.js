
const dbConnection = require('../../config/dbConnection');
const { setEstudante } = require('../models/estudantesModel');
const estudantesModel = require('../models/estudantesModel')

module.exports.estudantesListar = function(app,req,res){
    const connection = dbConnection(); 
      estudantesModel.getEstudantes(connection, function(err,result){
        if(!err){
            //console.log(result) 
            res.render('estudantes',{estudantes:result})
         }else{
             console.log('Erro',err) 
              let pagina  = '<h1>Erro encontrado - estudante</h1><h2>'+err+'</h2>'
              res.send(pagina) 
         }
    });      
}

module.exports.estudanteSalvar = function(app,req,res,errors ){
        let estudante = req.body;
        if(!errors.isEmpty()){
            let  erros = errors.array();
            res.render('admin/insereEstudante', {erros:erros,estudante:estudante})
            return;
        }
             
        
        const connection = dbConnection();      
        estudantesModel.setEstudante(estudante, connection, function(err, result){
            res.redirect('/estudante')
           
                       
          });
}

