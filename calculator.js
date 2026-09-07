        //   TASK - 1 
const args = process.argv;
// console.log(args)

const operation = args[2];
const num1 = Number(args[3]);
const num2 = Number(args[4]);


if (operation === "add") {
    console.log("Result:", num1 + num2);
} 
else if (operation === "subtract") {
    console.log("Result:", num1 - num2);
} 
else if (operation === "multiply") {
    console.log("Result:", num1 * num2);
} 
else if (operation === "divide") {
    if (num2 === 0) {
        console.log("Cannot divide by zero.");
    } else {
        console.log("Result:", num1 / num2);
    }
} 
else {
    console.log("Invalid operation. Use add, subtract, multiply, or divide.");
}