const inquirer = require('inquirer');

const fs = require('fs');

const { Circle, Square, Triangle } = require('./lib/shapes');

// const generateSvgLogo = require('./lib/shapes');

function init() {
    // show a welcomE message
    console.log(`
        -------------------------------
        Welcome to the SVG Logo Maker
        -------------------------------
        `);
}

init();

const validateInput = (input) => {
    if (input.trim() === '') {
        return 'This field is required. Please enter a valid value.';
    }
    return true;
};

inquirer.prompt([
    {
        type: 'list',
        message: 'Choose what shape you would like your logo to be: ',
        name: 'shapeChoice',
        choices: [
            'circle', 'square', 'triangle'
        ]
    },
    {
        type: 'input',
        message: 'Enter up to 3 characters for your logo: ',
        name: 'text',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Text is required. Please enter a valid value.';
            } else if (input.length < 1 || input.length > 3) {
                return 'Text must be between 1 and 3 characters. Please enter a valid value.';
            }
            return true;
        }
    },
    {
        type: 'input',
        message: 'what color would you like your shape to be (input color keyword or hexidecimal #): ',
        name: 'background',
        validate: validateInput
    },
    {
        type: 'input',
        message: 'What color would you like the lettering to be on your logo? (input color keyword or hexidecimal #)',
        name: 'textColor',
        validate: validateInput
    }
]).then((answers) => {
    const { shapeChoice, background, textColor, text } = answers;

    let shape;
    switch (shapeChoice) {
        case 'circle':
            shape = new Circle(text, textColor, background);
            break;
        case 'square':
            shape = new Square(text, textColor, background);
            break;
        case 'triangle':
            shape = new Triangle(text, textColor, background);
            break;
        default:
            console.log('Please make a shape choice');
            return;
    }

    const logoSVG = shape.render();

    fs.writeFile('./logo.svg', logoSVG, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
        } else {
            console.log('SVG logo successfully created!');
        }
    });
}).catch((err) => {
    console.error('Error during inquirer prompt:', err);
});