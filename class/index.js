var Student = /** @class */ (function () {
    function Student(name, roll) {
        this.name = name;
        this.id = roll;
    }
    Student.prototype.display = function () {
        console.log(this.name, this.id);
    };
    return Student;
}());
var std1 = new Student("mahdi", 23);
std1.display();
