var http = require('http');
var optfile = require('./module/optFile');
http.createServer(function (resquest, response) {
    response.writeHead(200, { 'Content-Type':'image/jpeg'});
    if (resquest.url !== '/favicon.ico') {
        optfile.readImg('./asset/zhaolei.jpg',response)

        //不能往response输出任何字符串，否则图片会加载不出来
        console.log('主程序执行完毕')
    }
}).listen(8899);

console.log('sever start at http://localhost:8899');
