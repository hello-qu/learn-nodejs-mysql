var fs = require('fs');

module.exports = {
    readfileSync: function (path) {
        var data = fs.readFileSync(path, 'utf-8'); //同步读取
        console.log(data);
    },
    readfileAsync: function (path, callback) {
        // 异步的throw 方法好像没什么效果
        fs.readFile(path, function (err, data) {
            if (err) {
                // throw err;
                 callback('文件不存在')
            } else {
                console.log(data.toString('utf8'));
                callback(data);
            }

            //多种转换格式
            // 如果不转换成字符串 会打印buffer  <Buffer e6 88 91 e6 98 af e7 99 bb e5 bd 95 e9 a1 b5 e9 9d a2>s
        })
        console.log('异步方法执行完毕');
    },
    readImg: function (path, res, recall) {
        fs.readFile(path, 'binary', function (err, filedata) {
            if (err) {
                console.log('--' + err + '--')
                recall('文件不存在')
            };
            res.write(filedata, 'binary');
            res.end();
        })
    },
    writeFileAsync: function (path, data, recall) {
        fs.writeFile(path, data, function (err) {
            if (err) throw err;
            console.log('it\'s saved!');
            recall('写文件成功')
        })
    },
    writeFileSync: function (pata, data) {
        fs.writeFileSync(pata, data);
        console.log('it\'s saved');
    }

}