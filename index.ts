#!/usr/bin/env node
import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1122;
let pinCode = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your Pin Code: ",
    type: "number",
  },
]);

if (pinCode.pin === myPin) {
  console.log("Correct Pin Code");
  let operations = await inquirer.prompt([
    {
      name: "operation",
      message: "Select the following: ",
      type: "list",
      choices: ["Withdraw", "Check Balance"],
    },
  ]);

  if (operations.operation === "Withdraw") {
    let amounts = await inquirer.prompt([
      {
        name: "amount",
        message: "Enter your amount: ",
        type: "number"
      },
    ]);

    if(amounts.amount > myBalance){
        console.log('Balance Insufficient');
    } else {
        myBalance -= amounts.amount
    console.log('Your remaining balance: '+ myBalance);
    }
  } else if (operations.operation === "Check Balance"){
    console.log('Your Balance is: '+myBalance)
  }
} 

else {
  console.log("Incorrect Pin Code");
}
