const fs = require('fs');
const inquirer = require("inquirer");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);
const {Circle, Square, Triangle} = require("./lib/shapes");

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'What is your three letter logo?',
            maxLength: 3,
            name: 'text',
        },
        {
            type: 'input',
            message: 'Please select a text color.',
            name: 'color',
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            choices: ['circle', 'triangle', 'square'],
            name: 'shape',
        },
    ])
    .then((response) =>
        fs.writeFile(response.text.toLowerCase().split(" ").join("") + ".svg", `

`, (err) =>
            err ? console.error(err) : console.log('success!')
        )
    );