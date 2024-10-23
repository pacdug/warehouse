class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    calculateArea() {
        return this.length * this.width;
    }

    calculatePerimeter() {
        return 2 * (this.length + this.width);
    }

    draw(canvasId) {
        const canvas = document.getElementById(canvasId);
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.rect(10, 10, this.width, this.length);
        ctx.stroke();
    }
}

// Ví dụ sử dụng
let rect = new Rectangle(100, 50);
console.log("Diện tích:", rect.calculateArea());
console.log("Chu vi:", rect.calculatePerimeter());
