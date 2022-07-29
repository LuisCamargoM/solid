class Question {
    constructor(description) {
        this.description = description;
    }
    showQuestions() {}
}

class BooleanQuestion {
    constructor(description) {
        this.description = description;
    }
    showAnswers() {
        console.log("1. True");
        console.log("2. False");
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description;
        this.options = options;
    }
    showAnswers() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description;
    }
    showAnswers() {
        console.log("Answer: _____________________");
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description;
    }
    showAnswers() {
        console.log("Minimum: _____________________");
        console.log("Maximum: _____________________");
    }
}

function printQuiz(questions) {
    questions.forEach((question) => {
        console.log(question.description);
        question.showAnswers();
        console.log("");
    });
}

const questions = [
    new BooleanQuestion("This video is useful"),
    new MultipleChoiceQuestion("What is your favorite language?", [
        "Python",
        "Css",
        "Html",
        "Javascript",
    ]),
    new TextQuestion("This video is useful"),
    new RangeQuestion("What is the speed limit in your city?"),
];

printQuiz(questions);