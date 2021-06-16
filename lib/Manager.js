class Manager {
    constructor(name, empID, email, office) {
        this.type = 'Manager';
        this.name = name;
        this.empID = empID;
        this.email = email;
        this.office = office;
    };
};

module.exports = Manager;