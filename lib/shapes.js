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
        return `<circle cx="50%" cy="50%" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shape {
    render () {
        return `<rect x="20%" y="20%" height="60%" width="60%" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150 50, 250 200, 50 200" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle}