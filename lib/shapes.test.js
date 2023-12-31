const {Circle, Square, Triangle} = require("./shapes");

describe('Circle', () => {
    it('Should generate a circle in the SVG file', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="80" fill="blue"/>');
    })
})

describe('Square', () => {
    it('Should generate a Square in the SVG file', () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect x="20%" y="10%" height="80%" width="60%" fill="green"/>');
    })
})

describe('Triangle', () => {
    it('Should generate a Triangle in the SVG file', () => {
        const shape = new Triangle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red"/>');
    })
})
