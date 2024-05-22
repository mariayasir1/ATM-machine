#! /usr/bin/env node

import inquirer from "inquirer";

//initialize user balance and pin code
let balance = 5000000;
let myPin = 1234;

//print welcome message
console.log("\n\tWelcome to code with Maria- ATM Machine\n");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your PIN code",
  },
]);
if (pinAnswer.pin === myPin) {
  console.log("PIN is correct.Login successful");
//   ;

  let operationAnswer = await inquirer.prompt([
    {
      name: "operation",
      type: "list",
      message: "Select an operation",
      choices: ["Withdraw amount", "Check Balance"],
    },
  ]);
  if (operationAnswer.operation === "Withdraw amount") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        mmessage: "Enter the amount to withdraw:",
      },
    ]);
    if (amountAns.amount > balance) {
      console.log("Your Current BAlance is Insufficient to withdraw the given amount");
    } else {
      balance -= amountAns.amount;
      console.log(`${amountAns.amount} Withdraw successfully`);
      console.log(`Youe remaining balance  is ${balance}`);
    }
  }
  else if(operationAnswer.operation === "Check Balance"){
    console.log(`Your Current Balance is: ${balance}`)
  }
}
else{
    console.log("PIN is incorrect, Try Again!");
};
