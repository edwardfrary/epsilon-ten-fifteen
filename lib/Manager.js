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
const manager = new Manager('Dave', '08830', "dave@dave.dave", 13);
manager.getRole();
module.exports = Manager;