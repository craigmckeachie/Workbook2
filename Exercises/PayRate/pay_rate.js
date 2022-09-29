"use strict";

function calculatePay() {
  //query html elements on the page and put them into variables
  const hoursWorkedInput = document.getElementById("hoursWorkedInput");
  const payRateInput = document.getElementById("payRateInput");
  const resultParagraph = document.getElementById("resultParagraph");

  //calculate something
  let hoursWorked = Number(hoursWorkedInput.value);
  let payRate = Number(payRateInput.value);
  let pay = hoursWorked * payRate;
  
  //create your message to display
  let message = `Pay is: ${pay}`;

  //display your message
  resultParagraph.innerText = message;
}
