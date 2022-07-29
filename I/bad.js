interface Entity {
    attackedDamage
    health
    name

    move()
    attack()
    takeDamage(amount)
}

class Character implements Entity {
    move() {
        // move 
    }
    attack() {
        // attack
    }

    takeDamage() {
        // taking damage
    }
}

class Turret implements Entity {
    move() {
        // A turret cant move
    }
}