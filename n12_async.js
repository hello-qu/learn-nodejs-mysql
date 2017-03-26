var async = require('async');

/*
function fun1() {
    var i = 0
    setInterval(function () {
        console.log('aaa', ++i);
        if (i == 3) {
            clearInterval(this)
        }
    }, 1000)
}

function fun2() {
    var k = 0
    setInterval(function () {
        console.log('bbb', ++k);
        if (k == 3) {
            clearInterval(this)
        }
    }, 1000)
}
*/

// fun1();
// fun2();
// console.log('point')

/*
function exec() {
    async.waterfall([function (done) {
        var i = 0
        setInterval(function () {
            console.log('aaa', ++i);
            if (i == 3) {
                clearInterval(this);
                done(null, 'aa--end')
            }
        }, 1000)
    },

    function (pre,done) {
        var i = 0
        setInterval(function () {
            console.log('aaa', ++i);
            if (i == 3) {
                clearInterval(this);
                done(null, pre+'bb--end')
            }
        }, 1000)
    }],function(err,res){
        console.log(err);
        console.log(res);
    })
}
exec()
*/

function exec() {
    async.series({one:function (callback) {
        var i = 0
        setInterval(function () {
            console.log('aaa' + (++i));
            if (i == 4) {
                clearInterval(this);
                callback(null, 'done-aa')
            }
        }, 1000)
    }, two:function (callback) {
        var j = 0
        setInterval(function () {
            console.log('bbb' + (++j));
            if (j == 4) {
                clearInterval(this);
                callback(null, 'done-bb')
            }
        }, 1000)
    }},function(err,res){
         console.log(err);
        console.log(res);
    }
    )
}

exec()

/*
function exec() {
    async.series({
        one: function (callback) {
            var i = 0
            setInterval(function () {
                console.log('aaa' + (++i));
                if (i == 4) {
                    clearInterval(this);
                    callback(null, 'done-aa')
                }
            }, 1000)
        }, 
        two: function (callback) {
            var j = 0
            setInterval(function () {
                console.log('bbb' + (++j));
                if (j == 4) {
                    clearInterval(this);
                    callback(null, 'done-bb')
                }
            }, 1000)
        }
    },function(err,res){
        console.log(err);
        console.log(res);
    })
}

exec()
*/