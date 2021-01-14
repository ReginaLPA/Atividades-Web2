const dbConnection = require('../../config/dbConnection')

module.exports.professoresListar = function(app, req, res){
    let connection = dbConnection();        
            let sql = 'select * from professores'
            connection.query(sql, function(err, result){
                //res.send(result)
                res.render('professores',{professores:result})
            });
}