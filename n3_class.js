function User(id, name, age) {
    this.name = name;
    this.id = id;
    this.age = age;
    this.enter = function () {
        console.log(this.age + '进入图书馆')
    }
}

module.exports = User;