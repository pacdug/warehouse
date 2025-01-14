class Rat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }

    chitChit() {
        return ('chit chit');
    }
}

class Cat {
    constructor(name, weight, maxspeed) {
        this.name = name;
        this.weight = weight;
        this.maxspeed = maxspeed;
    }

    meoMeo() {
        return 'meo meo';
    }

    catchRat(rat) {
        if (this.maxspeed > rat.speed) {
            return (`${this.name} bắt được ${rat.name}`);
        } else {
            return (`${this.name} không bắt được ${rat.name}`);
        }
    }

    eatRat(rat) {
        if (rat.status) {
            this.weight += rat.weight;
            rat.status = false;
            return (`${this.name} bắt được ${rat.name} <br>`);
        } else {
            return (`${this.name} không bắt được ${rat.name} <br>`);
        }
    }
}


