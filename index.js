const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern.js');
const generatePage = require('./src/generatePage.js');
const fs = require('fs');

const employeeArr = [];

const questions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Manager's name: ",
            default: "Edward F.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: 'Please enter the employee ID number: ',
            default: '08830',
            validate: empIDInput => {
                if (empIDInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID number: ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address: ',
            default: 'edwardf@epsilon15.net',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter the Manager's office: ",
            default: 'A13'
        },
    ]).then(data => {
        const {
            name,
            empID,
            email,
            office
        } = data;

        const manager = new Manager(name, empID, email, office);
        employeeArr.push(manager);
        console.log(employeeArr);
        addQuestions();
    })
};

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Engineer's name: ",
            default: "Scotty Chips",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's name: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: 'Please enter the employee ID number: ',
            default: '093',
            validate: empIDInput => {
                if (empIDInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID number: ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address: ',
            default: 'scottychips@epsilon15.net',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Engineer's email: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'Please enter gitHub username: ',
            default: 'scottychips'
        },
    ]).then(data => {
        const {
            name,
            empID,
            email,
            gitHub
        } = data;

        const engineer = new Engineer(name, empID, email, gitHub);
        employeeArr.push(engineer);
        console.log(employeeArr);
        addQuestions();
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Intern's name: ",
            default: "Joseph Greenhorn",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Intern's name: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'empID',
            message: 'Please enter the employee ID number: ',
            default: '91521312',
            validate: empIDInput => {
                if (empIDInput) {
                    return true;
                } else {
                    console.log('Please enter the employee ID number: ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter the email address: ',
            default: 'master.blaster1337@twitch.tv',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the Interns's email: ");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school: ",
            default: 'Rutgers'
        },
    ]).then(data => {
        const {
            name,
            empID,
            email,
            school
        } = data;

        const intern = new Intern(name, empID, email, school);
        employeeArr.push(intern);
        console.log(employeeArr);
        addQuestions();
    })
}

const addQuestions = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'Add additional employees or quit: ',
            choices: ['Engineer', 'Intern', 'Quit']

        }).then(data => {
            if (data.choice === 'Engineer') {
                createEngineer();
            } else if (data.choice === 'Intern') {
                createIntern();
            } else if (data.choice === 'Quit') {
                 generatePage(employeeArr);
            } else {
                console.log("ERROR: Invalid Selection");
            };

        });
};

questions();
