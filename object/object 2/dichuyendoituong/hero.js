class Hero {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 20;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveUp() {
        this.y -= this.speed;
    }

    moveDown() {
        this.y += this.speed;
    }
}
