

const dbConnection = require('../../config/dbConnection')

module.exports.estudantesListar = function(app,req,res){
    const connection = dbConnection(); 
    const estudantesModel = require('../models/estudantesModel')
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

