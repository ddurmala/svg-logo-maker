const fs = require('fs');

class Circle {
    constructor(text, textColor, background) {
        this.text = text;
        this.textColor = textColor;
        this.background = background;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.background}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Square {
    constructor(text, textColor, background) {
        this.text = text;
        this.textColor = textColor;
        this.background = background;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="60" width="80" height="80" fill="${this.background}" /><text x="150" y="110" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

class Triangle {
    constructor(text, textColor, background) {
        this.text = text;
        this.textColor = textColor;
        this.background = background;
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.background}" /><text x="150" y="120" font-size="32" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};



// function generateSvgLogo(shapeChoice, background, textColor, text) {
//     let svgContent = '';

//     switch (shapeChoice) {
//         case 'circle':
//             svgContent = `
//         <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${background}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>
//         `;
//             break;
//         case 'square':
//             svgContent = `
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="110" y="60" width="80" height="80" fill="${background}" /><text x="150" y="110" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text></svg>
//         `;
//             break;
//         case 'triangle':
//             svgContent = `
//         <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${background}" /><text x="150" y="120" font-size="32" text-anchor="middle" fill="${textColor}">${text}</text></svg>
//         `;
//             break;
//         default:
//             console.log('please make a shape choice');

//     }

//     return svgContent;
// }

// module.exports = generateSvgLogo;
