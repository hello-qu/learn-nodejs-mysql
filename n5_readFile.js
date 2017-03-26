var http = require('http');
var url = require('url');
var readFile = require('./module/readFile')
http.createServer(function (resquest, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=uft-8' });
    if (resquest.url !== '/favicon.ico') {
        // readFile.readfileSync('./view/login.html');
        //  readFile.readfileAsync('./view/login.html',response); 异步的问题 ，此处读不到response
        
        readFile.readfileAsync('./view/login.html',function(data){
            response.write(data);
            response.end('ok123');
        })
        console.log('主程序执行完毕')
    }
}).listen(8899);

console.log('sever start at http://localhost:8899');
