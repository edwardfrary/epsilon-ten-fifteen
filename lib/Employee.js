class Employee {
    constructor(name, empID, email) {
        this.type = 'Employee';
        this.name = name;
        this.empID = empID;
        this.email = email;
    };

    getName() {
        return console.log(this.name);
    };

    getId() {
        return console.log(this.empID);
    };

    getEmail() {
        return console.log(this.email);
    };

    getRole() {
        return console.log(this.type);
    };
};

module.exports = Employee;