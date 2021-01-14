
const dbConnection = require('../../config/dbConnection')

module.exports.conteudoListar = function(app,req,res){
    let connection = dbConnection();        
            let sql = 'select * from  conteudoprogramatico'
            connection.query(sql, function(err, result){
                //res.send(result)
                res.render('conteudo',{conteudo:result})
            
            });
}