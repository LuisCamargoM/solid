class Logger {
    constructor() {
        this.logInfo = "";
    }
    logCaloriesInfo(newInfo) {
        console.log(newInfo);
    }
}

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories) {
            new Logger().logCaloriesInfo("Max calories number excedeed!");
        }
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);