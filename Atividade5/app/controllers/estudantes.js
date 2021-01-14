

const dbConnection = require('../../config/dbConnection')

module.exports.estudantesListar = function(app,req,res){
    let connection = dbConnection();        
            let sql = 'select * from estudantes'
            connection.query(sql, function(err, result){  
                console.log(result)      
                res.render('estudantes',{estudantes:result})
                //res.send(result)
            });
}