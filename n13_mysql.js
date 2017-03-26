var mysql =require('mysql');

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'mysql',
    port:3306
});

//连接
connection.connect(function(err){
    if(err){
        console.log('[query] - '+err);
        return;
    }
    console.log('[connection connect] - succeed')
})

//插入
var userAdd = 'insert into mysql (uname,pwd) values (?,?)';
var param = ['xiaomin','520520'];
connection.query(userAdd,param,function(err,rs){
    if(err){
        console.log('insert error',err.message);
        return;
    }
    console.log('insert success')
});

//查询
connection.query('select * from mysql',function(err,res,filds){
    if(err){
        console.log('query - error')
        return;
    }
    console.log('query result:'+res[1].pwd);
})


//关闭
connection.end(function(err){
    if(err){
        console.log('[end] - '+err);
        return;
    }
    console.log('[connection end] - succeed')
})