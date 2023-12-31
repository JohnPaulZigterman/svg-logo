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
        return `<rect x="20%" y="10%" height="80%" width="60%" fill="${this.color}"/>`
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Square, Triangle}