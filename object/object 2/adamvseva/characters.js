class Character {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    move(newPosition) {
        this.position = newPosition;
    }

    speak(message) {
        return `${this.name}: ${message}`;
    }
}

class Adam extends Character {
    constructor() {
        super("Adam", "left");
    }
}

class Eva extends Character {
    constructor() {
        super("Eva", "right");
    }
}
