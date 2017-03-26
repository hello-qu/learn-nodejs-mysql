var http = require('http');
var url = require('url');
var route = require('./module/router')
http.createServer(function (resquest, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=uft-8' });
    if (resquest.url !== '/favicon.ico') {
        var pathname = url.parse(resquest.url).pathname;
        pathname = pathname.replace(/\//, '');
        // console.log(pathname);
        route[pathname](response)
        console.log('主程序执行完毕')
    }
}).listen(8899);

console.log('sever start at http://localhost:8899');
