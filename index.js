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
            name: 'textcolor',
        },
        {
            type: 'list',
            message: 'Please select a shape.',
            choices: ['Circle', 'Square', 'Triangle'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'Please select a fill color.',
            name: 'shapecolor',
        },
    ])
    .then((response) => {

        var text = response.text;

        var textColor = response.textcolor;

        var shape;

        if (response.shape == 'Circle') {
            shape = new Circle();
        } else if (response.shape == 'Square') {
            shape = new Square();
        } else if (response.shape == 'Triangle') {
            shape = new Triangle();
        }

        var shapeColor = response.shapecolor;

        fs.writeFile(response.text.toLowerCase().split(" ").join("") + ".svg", `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   
<rect width="100%" height="100%" fill="white" />
   
<circle cx="150" cy="100" r="80" fill="green" />
   
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
   
</svg>
`, (err) =>
            err ? console.error(err) : console.log('success!')
        )
});