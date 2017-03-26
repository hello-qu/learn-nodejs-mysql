var http = require('http');
var url = require('url');
var route = require('./module/router')

var hostname = '127.0.0.1';
var port = 8899
http.createServer(function (resquest, response) {
    if (resquest.url !== '/favicon.ico') {
        var pathname = url.parse(resquest.url).pathname;
        pathname = pathname.replace(/\//, '');
        try {
            route[pathname](resquest, response);
        } catch (error) {
            console.log('--' + error + '--');
            response.writeHead(200, { 'Content-Type': 'text/html;charset=uft-8' });
            response.write(error.toString());
            response.end();
        }
        console.log('主程序执行完毕')
    }
}).listen(port, hostname,function () {
    console.log(`sever start at http://${hostname}:${port}`);
});


