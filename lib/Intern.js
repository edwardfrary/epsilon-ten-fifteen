const Employee = require ('./Employee');

class Intern extends Employee {
    constructor(name, empID, email, school) {
        super(name, empID, email);
        this.type = 'Intern';
        this.school = school;
    };

    getSchool() {
        return console.log(this.school);
    };
};

const intern = new Intern("Edward", "404", "edward404@gmail.com", "Rutgers");
intern.getId();

module.exports = Intern;