const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const render = require('./src/page-template.js');
const { questions, options, engineerQs, internQs } = require('./src/questions.js');
const employees = [];

//! TODO: Write Code to gather information about the development team members, and render the HTML file.

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then(manager => {
            const mgr = new Manager(manager.name, manager.id, manager.email, manager.officeNumber);
            employees.push(mgr);
            menu();
        })
}

function menu() {
    inquirer.prompt(options)
        .then(opts => {
            if (opts.options === 'Add an engineer') {
                inquirer.prompt(engineerQs)
                    .then(engineer => {
                        const eng = new Engineer(engineer.name, engineer.id, engineer.email, engineer.github);
                        if (employees.find(employee => employee.id === engineer.id)) {
                            console.log(chalk.red('An employee with this ID has already been added!'));
                        } else {
                            employees.push(eng);
                        }
                        menu();
                    });
            } else if (opts.options === 'Add an intern') {
                inquirer.prompt(internQs)
                    .then(intern => {
                        const int = new Intern(intern.name, intern.id, intern.email, intern.school);
                        if (employees.find(employee => employee.id === intern.id)) {
                            console.log(chalk.red('An employee with this ID has already been added!'));
                        } else {
                            employees.push(int);
                        }
                        menu();
                    });
            } else {
                writeToFile(outputPath, render(employees));
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
            console.log(chalk.green('Your team profile has been generated. Please find it in the "output" folder.'));
        }
    })
}