class Shape {
    constructor() {
        this.color = "";
    }
    setColor(color){
        this.color = (color);
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="50" cy="50" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="50" y="50" height="100" width="100" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon height="80" width="80" points="50 13.397, 100 100, 0 100"`
    }
}

module.exports = {Circle, Square, Triangle}