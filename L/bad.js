class Bird {
    fly() {
        console.log("I can Fly");
    }
}

class Duck extends Bird {
    quack() {
        console.log("I can quack!");
    }
}

class Penguim extends Bird {
    fly() {
        throw new Error("I cannot fly!");
    }
    swim() {
        console.log("I can swim!");
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
const penguim = new Penguim();

makeBirdFly(duck);
makeBirdFly(penguim);