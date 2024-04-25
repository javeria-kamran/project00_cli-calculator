import inquirer from "inquirer";

const results = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "Firstnumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operator to perform operations",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditionals
if (results.operator === "Addition") {
  console.log(results.Firstnumber + results.secondnumber);
} else if (results.operator === "Subtraction") {
  console.log(results.Firstnumber - results.secondnumber);
} else if (results.operator === "Multiplication") {
  console.log(results.Firstnumber * results.secondnumber);
} else if (results.operator === "Division") {
  console.log(results.Firstnumber / results.secondnumber);
} else {
  console.log(`Kindly select valid operator`);
}
