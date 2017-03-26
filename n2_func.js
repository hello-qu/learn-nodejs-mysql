var http = require('http');
var Teacher = require('./module/teacher.js')
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url !== '/favicon.ico') {  //请求地址 防止二次访问
        // func(response)
        var teacher = new Teacher(01,'xiaomin',20);
        teacher.teach(response)

        // 对象通过字符串调用
        response.end();  //必须用end 结束
    }
}).listen(8899);

console.log("http://localhost:8899,hello nodejs");


function func(response) {
    console.log('hello node');
    response.write('你好 func2');  //http 协议没有执行完毕 
}