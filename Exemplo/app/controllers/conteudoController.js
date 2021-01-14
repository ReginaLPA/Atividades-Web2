
const dbConnection = require('../../config/dbConnection')
const {setConteudo} =require('../models/conteudoModel')
const conteudoModel = require('../models/conteudoModel')

module.exports.conteudoListar = function(app,req,res){
    const connection = dbConnection();        
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

module.exports.conteudoSalvar = function(app,req,res,errors ){
    let conteudo = req.body;
    if(!errors.isEmpty()){
        let  erros = errors.array();
        res.render('admin/insereConteudo', {erros:erros,conteudoprogramatico:conteudo})
        return;
    }
         
    
    const connection = dbConnection();      
    conteudoModel.setConteudo(conteudo, connection, function(err, result){
     console.log(conteudo)
        res.redirect('/conteudo')
       
                   
      });
}

