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
            type: 'text',
            name: 'name',
            message: "Please enter the Manager's name: "
        },
        {
            type: 'text',
            name: 'empID',
            message: 'Please enter the employee ID number: '
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please enter the email address: '
        },
        {
            type: 'text',
            name: 'office',
            message: "Please enter the Manager's office: "
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
            type: 'text',
            name: 'name',
            message: "Please enter engineer's name: "
        },
        {
            type: 'text',
            name: 'empID',
            message: "Please enter employee ID: "
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter email address: "
        },
        {
            type: 'text',
            name: 'gitHub',
            message: 'Please enter gitHub username: '
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
            type: 'text',
            name: 'name',
            message: "Please enter intern's name: "
        },
        {
            type: 'text',
            name: 'empID',
            message: "Please enter employee ID: "
        },
        {
            type: 'text',
            name: 'email',
            message: "Please enter email address: "
        },
        {
            type: 'text',
            name: 'school',
            message: "Please enter intern's school: "
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
