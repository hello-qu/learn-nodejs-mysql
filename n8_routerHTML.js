var http = require('http');
var url = require('url');
var route = require('./module/router')
http.createServer(function (resquest, response) {
    if (resquest.url !== '/favicon.ico') {
        var pathname = url.parse(resquest.url).pathname;
        pathname = pathname.replace(/\//, '');
        // console.log(pathname);
        try {
            route[pathname](response);
        } catch (error) {
            console.log('--'+error+'--')
        }
        console.log('主程序执行完毕')
    }
}).listen(8899);

console.log('sever start at http://localhost:8899');
