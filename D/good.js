class Store {
    constructor(paymentProcessor) {
        this.paymentProcessor = paymentProcessor;
    }

    purchaseBike(quantity) {
        this.paymentProcessor.pay(200 * quantity);
    }

    purchaseHelmet(quantity) {
        this.paymentProcessor.pay(15 * quantity);
    }
}

class StripePaymentProcessor {
    constructor(user) {
        this.stripe = new Stripe(user);
    }

    pay(ammountInDollars) {
        this.stripe.makePayment(ammountInDollars * 100);
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

class PaypalPaymentProcessor {
    constructor(user) {
        this.user = user;
        this.paypal = new Paypal();
    }

    pay(ammountInDollars) {
        this.paypal.makePayment(this.user, ammountInDollars);
    }
}
class Paypal {
    makePayment(user, amountInDollars) {
        console.log(`${user} made payment of ${amountInDollars} with Paypal`);
    }
}

const store = new Store(new PaypalPaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);

/**
 * IF STRIPE DOESNT WORK ANYMORE, TO CHANGE TO PAYPAL WE WILL HAVE TO CHANGE
 * A LOOT OF THINGS TO MAKE IT WORK
 */