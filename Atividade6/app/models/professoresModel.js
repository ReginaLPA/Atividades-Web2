module.exports = {
    getProfessores: function(connection,callback){
        let sql = `select * from professores`;
        connection.query(sql,callback);
    }
}