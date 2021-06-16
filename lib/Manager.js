const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(office) {
        super(office);
        this.type ="Manager";
        this.office = office;
    };

    getOffice() {
        return console.log(this.office);
    };
    
};

const manager = new Manager();
manager.getRole();
module.exports = Manager;