var readFile = require('./optFile');
var url = require('url')
var querystring = require('querystring')
var recall = function (res) {
    res.writeHead(200, { 'Content-Type': 'text/html;charset=uft-8' });
    return function (data) {
        res.write(data);
        res.end()
    }
}
module.exports = {
    login: function (req, res) {
        var querydata = url.parse(req.url, true).query;
        console.log(querydata);
        if (querydata['email'] != null) {
            console.log(querydata['email'])
            console.log(querydata['pwd'])
        }
        // 异步方式
        var post = '';
        req.on('data', function (chuck) {
            post += chuck;
        });
        req.on('end', function () {
            post = querystring.parse(post);
            // console.log('email:'+post['email']+'\n');
            // console.log('pwd:'+post['pwd']+'\n');
            function callback(data) {
                var arr = ['email', 'pwd']
                dataStr = data.toString();
                console.log(`--${dataStr}--`)
                for (var i = 0; i < arr.length; i++) {
                    var reg = new RegExp('{' + arr[i] + '}', 'g');
                    dataStr = dataStr.replace(reg, post[[arr[i]]]);
                }
                res.write(dataStr);
                res.end();
            }
            readFile.readfileAsync('./view/login.html', callback)
        })

    },
    zhuce: function (req, res) {
        readFile.readfileAsync('./view/zhuce.html', recall(res))
    },
    writeFile: function (req, res) {
        readFile.writeFileAsync('./view/one.html', '今天阳光灿烂', recall(res))
    },
    showImg: function (req, res) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        readFile.readImg('./asset/zhaolei.jpg', res, recall(res))
    }
}