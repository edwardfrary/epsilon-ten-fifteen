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
const manager = new Manager('Dave', '08830', "dave@dave.dave", 13);
manager.getRole();
module.exports = Manager;