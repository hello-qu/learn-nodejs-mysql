var mysql = require('mysql');

var OptPool = function () {
    this.flag = true;
    this.pool = mysql.createPool({
        host: '127.0.0.1',
        user: 'root',
        password: '123456',
        database: 'mysql',
        port: 3306
    });
    this.getPool = function(){
        if(this.flag){
            this.pool.on('connection',function(connection){
                 connection.query('SET SESSION auto_increment_increment=1');
                 this.flag = false;
            })
        }
        return this.pool;
    }
}

module.exports = OptPool

//连接
