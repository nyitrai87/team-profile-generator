const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/page-template.js');
const { questions, engineerQs, internQs } = require('./src/questions.js');
const employees = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(manager => {
            const mgr = new Manager(manager.mgrName, manager.mgrId, manager.mgrEmail, manager.mgrOfficeNumber);
            employees.push(mgr)
            if (manager.options === 'Add an engineer') {
                inquirer.prompt(engineerQs)
                    .then(engineer => {
                        const eng = new Engineer(engineer.engName, engineer.engId, engineer.engEmail, engineer.engGithub)
                        employees.push(eng);
                        init();
                    });
            } else if (manager.options === 'Add an intern') {
                inquirer.prompt(internQs)
                    .then(intern => {
                        const int = new Intern(intern.intName, intern.intId, intern.intEmail, intern.intSchool)
                        employees.push(int);
                        init();
                    });
            } else {
                // Filtering the employees array of objects from duplicates by using chickens' solution: 
                // https://stackoverflow.com/a/56757215
                let filteredEmps = employees.filter((v, i, a) => a.findIndex(v2 => (JSON.stringify(v2) === JSON.stringify(v))) === i);
                console.log(filteredEmps)
                writeToFile(outputPath, render(filteredEmps));
                //process.exit(0);
            }
        })
}

// function call to initialize program
init();

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been generated. Please find it in the "output" folder.');
        }
    })
}