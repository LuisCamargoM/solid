/**
 * This class has two reasons to change
 * 1- If we change trackCalories function
 * 2- If we change logCaloriesInfo function
 */

class CalorieTracker {
    constructor(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }

    trackCalories(calorieCount) {
        this.currentCalories += calorieCount;
        if (this.currentCalories > this.maxCalories) {
            this.logCaloriesInfo();
        }
    }

    logCaloriesInfo() {
        console.log("Max calories number excedeed!");
    }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);