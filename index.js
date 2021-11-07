// require file system and inquirer
const fs = require("fs");
const inquirer = require('inquirer');

const render = require("./src/page-template.js");

// Require all file paths for each class
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// empty array to hold all team members
const team = [];

// begins getting team, starting with manager
function getTeam() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the team manager?:',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the ID for this manager?:',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the email for this manager?: ',
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the office number for this manager?: ',
        }
    ])
    // then takes answers and pushes them into the Manager class
    // then pushes manager to team array
    // then runs addNewEmployee() which prompts for any new employees
    .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        team.push(manager);
        addEmployee();
    })
}

// if they choose to add an engineer
function addEngineer() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'engiName',
        message: 'What is the name of this engineer?:'
    },
    {
        type: 'input',
        name: 'engiID',
        message: 'What is the ID of this engineer?:'
    },
    {
        type: 'input',
        name: 'engiEmail',
        message: 'What is the email of this engineer?:'
    },
    {
        type: 'input',
        name: 'engigithub',
        message: 'What is the github username of this engineer?:'
    }
    ])
    // takes answers and pushes them into the Engineer class
    // then pushes engineer to team array
    // then runs addNewEmployee() which prompts for any new employees
    .then(answers => {
        const engineer = new Engineer(answers.engiName, answers.engiID, answers.engiEmail, answers.engigithub);
        team.push(engineer);
        addEmployee();
    });
};

// if they choose to add an intern
function addIntern(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'intName',
            message: 'What is the name of this intern?:'
        },
        {
            type: 'input',
            name: 'intID',
            message: 'What is the ID of this intern?:'
        },
        {
            type: 'input',
            name: 'intEmail',
            message: 'What is the email of this intern?:'
        },
        {
            type: 'input',
            name: 'intschool',
            message: 'What is the school this intern is attending?:'
        }
    ])
    // takes answers and pushes them into the Intern class
    // then pushes intern to team array
    // then runs addNewEmployee() which prompts for any new employees
    .then(answers => {
        const intern = new Intern(answers.intName, answers.intID, answers.intEmail, answers.intschool);
        team.push(intern);
        addEmployee();
    })
}

// ask if they wish to continue team building
function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employee',
            message: 'Would you like to add another Employee?: ',
            choices: ['Add an Engineer', 'Add an Intern', 'I am finished!'],
        }
    ])
    // measures the answer given and executes corresponding function
    .then((choice) => {
        console.log(choice.employee);
        if (choice.employee === 'Add an Engineer') {
            addEngineer();
        }
        if (choice.employee === 'Add an Intern') {
            addIntern();
        }
        if (choice.employee === 'I am finished!') {
            buildTeam()
        }
    })
};

// generates your new html file
function buildTeam() {
    fs.writeFileSync('./dist/team.html', render(team), "utf-8");
    console.log('team.html has been written to your "dist" folder!');
  }

//   initiates application
getTeam()