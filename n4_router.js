var http = require('http');
var url = require('url');
var route = require('./module/router.js')
http.createServer(function (resquest, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=uft-8' });
    if (resquest.url !== '/favicon.ico') {

        // 从url 中获取路由相应的信息 通过路由字符串生成对应的路由。
        var pathname = url.parse(resquest.url).pathname;
        pathname = pathname.replace(/\//, '');
        // console.log(pathname);
        route[pathname](response)
        response.end();
    }
}).listen(8899);

console.log('sever start at http://localhost:8899');
