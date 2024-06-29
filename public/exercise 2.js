"use strict";
class Calculator {
    validateInputs(a, b) {
        if (typeof (a) !== 'number' || typeof (b) !== 'number') {
            console.error("Both inputs must be numbers.");
        }
        return true;
    }
    add(a, b) {
        this.validateInputs(a, b);
        return (a + b);
    }
    subtract(a, b) {
        this.validateInputs(a, b);
        return (a - b);
    }
    multiply(a, b) {
        this.validateInputs(a, b);
        return (a * b);
    }
    divide(a, b) {
        this.validateInputs(a, b);
        if (b === 0) {
            console.error("Division by zero is not allowed.");
            return "ERROR!!!, division by zero is not allowed.";
        }
        return a / b;
    }
} //end of class
// Create an instance of Calculator
const calculator = new Calculator();
// Examples of using the calculator
console.log(calculator.add(6, 3));
console.log(calculator.subtract(6, 3));
console.log(calculator.multiply(6, 3));
console.log(calculator.divide(6, 3));
console.log(calculator.divide(6, 0));
