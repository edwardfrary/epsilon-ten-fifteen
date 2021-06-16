const Employee = require ('./Employee');

class Engineer extends Employee {
    constructor(name, empID, email, gitHub) {
        super(name, empID, email);
        this.type = 'Engineer';
        this.gitHub = gitHub;
    };

    getGithub(){
        return console.log(this.gitHub);
    };
};

module.exports = Engineer;