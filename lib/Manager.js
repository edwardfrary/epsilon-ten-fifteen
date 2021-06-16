const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, empID, email, office) {
        super(name, empID, email);
        this.type ="Manager";
        this.office = office;
    };

    getOffice() {
        return console.log(this.office);
    };
    
};

module.exports = Manager;