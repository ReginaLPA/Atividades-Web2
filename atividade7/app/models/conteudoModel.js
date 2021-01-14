module.exports = {
    getConteudo: function(connection,callback){
        let sql = 'select * from  conteudoprogramatico';
        connection.query(sql,callback);
    }
}