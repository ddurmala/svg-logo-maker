

const shapes = require('./shapes.js');


describe('shape class', () => {
    // A test is created to check that sum does in fact return the two numbers added together.
    describe('circle', () => {
        it('should render logo.svg', () => {
            const text = 'SVG';
            const textColor = 'yellow';
            const background = 'blue';

            const template = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${background}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
            const shape = new shapes.Circle(text, textColor, background);

            expect(shape.render()).toEqual(template);
        });
    });

})

