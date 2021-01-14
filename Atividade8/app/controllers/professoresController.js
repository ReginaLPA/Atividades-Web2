const dbConnection = require('../../config/dbConnection')
const {setProfessor} =require('../models/professoresModel')
const professoresModel = require('../models/professoresModel')


module.exports.professoresListar = function(app, req, res){
    const connection = dbConnection();        
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

module.exports.professorSalvar = function(app,req,res,errors){
    let professor = req.body;
    if(!errors.isEmpty()){
        let  erros = errors.array();
        res.render('admin/insereProfessor', {erros:erros,professor:professor})
        return;
    }       
    
    const connection = dbConnection();      
    professoresModel.setProfessor(professor, connection, function(err, result){  //a fução setprefessor vem da model para salvar o professor 
        console.log(professor)
       res.redirect('/professor');
                          
      });
} 




