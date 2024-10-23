class Temperature {
    constructor(celsius) {
        this.celsius = celsius;
    }

    toFahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }

    toKelvin() {
        return this.celsius + 273.15;
    }

    static fromFahrenheit(fahrenheit) {
        return new Temperature((fahrenheit - 32) * 5 / 9);
    }

    static fromKelvin(kelvin) {
        return new Temperature(kelvin - 273.15);
    }
}
