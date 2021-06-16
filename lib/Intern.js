const Employee = require ('./Employee');

class Intern extends Employee {
    constructor(name, empID, email, school) {
        super(name, empID, email);
        this.type = 'Intern';
        this.school = school;
    };
};

module.exports = Intern;