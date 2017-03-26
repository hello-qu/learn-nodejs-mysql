var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
    if (request.url !== '/favicon.ico') {  //请求地址 防止二次访问
        console.log('hello node');
        response.write('你好，node');  //http 协议没有执行完毕 
        response.end()  //必须用end 结束
    }
}).listen(8899);

console.log("http://localhost:8899,hello nodejs");