class Store {
    constructor(user) {
        this.stripe = new Paypal(user);
    }

    purchaseBike(quantity) {
        this.stripe.makePayment(200 * quantity * 100);
    }

    purchaseHelmet(quantity) {
        this.stripe.makePayment(15 * quantity * 100);
    }
}

class Stripe {
    constructor(user) {
        this.user = user;
    }
    makePayment(amountInCents) {
        console.log(
            `${this.user} made payment of ${amountInCents / 100} with Stripe`
        );
    }
}

class Paypal {
    makePayment(amountInDollars) {
        console.log(`${this.user} made payment of ${amountInDollars} with Paypal`);
    }
}

const store = new Store("John");
store.purchaseBike(2);
store.purchaseHelmet(2);

/**
 * IF STRIPE DOESNT WORK ANYMORE, TO CHANGE TO PAYPAL WE WILL HAVE TO CHANGE
 * A LOOT OF THINGS TO MAKE IT WORK
 */