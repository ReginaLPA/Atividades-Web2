
const dbConnection = require('../../config/dbConnection')

module.exports.conteudoListar = function(app,req,res){
    const connection = dbConnection();        
    const conteudoModel = require('../models/conteudoModel')
    conteudoModel.getConteudo(connection, function(err,result){
        if(!err){
            res.render('conteudo',{conteudo:result})
         }
         else{             
            console.log('Erro',err) 
            let pagina  = '<h1>Erro encontrado - conteudo</h1><h2>'+err+'</h2>'
            return res.send(pagina) 
         }
            
    });
}

