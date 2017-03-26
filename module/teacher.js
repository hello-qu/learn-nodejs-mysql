var User = require('./n3_class');

function Teacher(id,name,age){
    User.apply(this,arguments)
}

Teacher.prototype.teach = function(res){
    res.write(this.name+'讲课');
}

module.exports = Teacher;
