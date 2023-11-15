class ConexionMysql{
    mysql = require('mysql');

    conn = this.mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'Admin*'
    })

    consulta(query){
        this.conn.connect();

        this.conn.query(query,function(err,rows,fields){
            if(err) throw err;
            return rows;
        });
        this.conn.end();
    }
}

module.exports = ConexionMysql;
