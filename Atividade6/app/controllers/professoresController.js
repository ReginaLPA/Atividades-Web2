const dbConnection = require('../../config/dbConnection')

module.exports.professoresListar = function(app, req, res){
    const connection = dbConnection();        
    const professoresModel = require('../models/professoresModel')
        professoresModel.getProfessores(connection, function(err, result) {
            if(!err){
                res.render('professores',{professores:result})
            }else{
                console.log('Erro',err) 
                let pagina  = '<h1>Erro encontrado - estudante</h1><h2>'+err+'</h2>'
                res.send(pagina) 
                }
            
        });
           
}




