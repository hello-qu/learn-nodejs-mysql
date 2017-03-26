var http = require('http');
var url = require('url');
var route = require('./module/router')
http.createServer(function (resquest, response) {
    if (resquest.url !== '/favicon.ico') {
        var pathname = url.parse(resquest.url).pathname;
        // port  = url.parse(resquest.url).port 
        pathname = pathname.replace(/\//, '');
        try {
            route[pathname](resquest,response);
        } catch (error) {
            console.log('--'+error+'--');
             response.writeHead(200, { 'Content-Type': 'text/html;charset=uft-8' });
             response.write(error.toString());
             response.end();
        }
        console.log('主程序执行完毕')
    }
}).listen(8899);

console.log(`sever start at http://localhost:8080`);
