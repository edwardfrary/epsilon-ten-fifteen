const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const generatePage = require('./src/generatePage.js');

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
        console.log(manager);
        addQuestions();
    })
};

const addQuestions = () => {
    inquirer.prompt(
        {
        type: 'list',
        name: 'choice',
        message: 'Add additional employees or quit: ',
        choices: ['Engineer', 'Intern', 'Quit']
        
    }).then(data => {
        if (data.choice === 'Engineer'){
            createEngineer();
        } else if (data.choice === 'Intern'){
            createIntern();
        } else {
            return;
        }
    })
};

const createEngineer = () => {
    inquirer.prompt()
}

questions();