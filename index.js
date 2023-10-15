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

        let shape;

        if (response.shape == 'Circle') {
            shape = new Circle();
        } else if (response.shape == 'Square') {
            shape = new Square();
        } else if (response.shape == 'Triangle') {
            shape = new Triangle();
        }

        var shapeColor = response.shapecolor;

        shape.setColor(shapeColor);

        fs.writeFile("./examples/logo.svg", `
<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
   
<rect width="100%" height="100%" fill="white" />
   
${shape.render()}
   
<text x="50%" y="55%" font-size="40" font-family="monospace" text-anchor="middle" fill="${textColor}">${text}</text>
   
</svg>
`, (err) =>
            err ? console.error(err) : console.log('success!')
        );
        console.log('Generated logo.svg');
});