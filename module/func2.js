/*
module.exports = function func2(response){
    console.log('hello node');
    response.write('你好 我是通过module 引入的func2');
}

module.exports = function func2(response){
    console.log('hello node');
    response.write('你好 我是通过module 引入的func3');
}
*/

// module.exports 只能支持导入一个函数或对象

module.exports = {
    func2(response){
         console.log('hello node');
    response.write('你好 我是通过module 引入的func2');
    },
    func3(response){
         console.log('hello node');
    response.write('你好 我是通过module 引入的func3');
    }
}