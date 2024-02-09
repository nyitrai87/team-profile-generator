const questions = [
    {
        type: 'input',
        name: 'mgrName',
        message: "What is your Manager's name?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide your Manager's name!";
            }
        }
    },
    {
        type: 'input',
        name: 'mgrId',
        message: "What is your Manager's employee ID?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide your Manager's employee ID!";
            }
        }
    },
    {
        type: 'input',
        name: 'mgrEmail',
        message: "What is your Manager's email address?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide your Manager's email address!";
            }
        }
    },
    {
        type: 'input',
        name: 'mgrOfficeNumber',
        message: "What is your Manager's office number?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide your Manager's office number!";
            }
        }
    },
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['Add an engineer', 'Add an intern', 'Finish building the team'],
    },
];

const engineerQs = [
    {
        type: 'input',
        name: 'engName',
        message: "What is the Engineer's name?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's name!";
            }
        }
    },
    {
        type: 'input',
        name: 'engId',
        message: "What is the Engineer's employee ID?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's employee ID!";
            }
        }
    },
    {
        type: 'input',
        name: 'engEmail',
        message: "What is the Engineer's email address?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's email address!";
            }
        }
    },
    {
        type: 'input',
        name: 'engGithub',
        message: "What is the Engineer's GitHub username?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Engineer's GitHub username!";
            }
        }
    },
];

const internQs = [
    {
        type: 'input',
        name: 'intName',
        message: "What is the Intern's name?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Intern's name!";
            }
        }
    },
    {
        type: 'input',
        name: 'intId',
        message: "What is the Intern's employee ID?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Intern's employee ID!";
            }
        }
    },
    {
        type: 'input',
        name: 'intEmail',
        message: "What is the Intern's email address?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the Intern's email address!";
            }
        }
    },
    {
        type: 'input',
        name: 'intSchool',
        message: "In which school is the Intern studying?",
        validate(value) {
            if (value) {
                return true;
            } else {
                return "Please provide the school in which the Intern is studying!";
            }
        }
    },
];

module.exports = { questions, engineerQs, internQs };