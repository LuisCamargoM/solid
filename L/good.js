class FlyingBird {
    fly() {
        console.log("I can Fly");
    }
}

class SwimmingBird {
    swim() {
        console.log("I can swim");
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log("I can quack!");
    }
}

class Penguim extends SwimmingBird {}

function makeBirdFly(bird) {
    bird.fly();
}

function makeBirdSwim(bird) {
    bird.swim();
}

const duck = new Duck();
const penguim = new Penguim();

makeBirdFly(duck);
makeBirdSwim(penguim);