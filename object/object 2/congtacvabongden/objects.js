class Lamp {
    constructor() {
        this.isOn = false;
    }

    turnOn() {
        this.isOn = true;
    }

    turnOff() {
        this.isOn = false;
    }

    toggle() {
        this.isOn = !this.isOn;
    }
}

class Switch {
    constructor(lamp) {
        this.lamp = lamp;
    }

    press() {
        this.lamp.toggle();
    }
}
