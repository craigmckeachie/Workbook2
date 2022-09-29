"use strict";

function showGreeting() {
  const messageDiv = document.getElementById("messageDiv");
  messageDiv.innerHTML = "<h1>Hello World!</h2>";
}

showGreeting();

let verb = "ate";
let noun = "food";
// let sentence = "I " + verb + " " + noun + ".";

let sentence = `I ${verb} ${noun}. 
                I enjoyed it.`;

console.log(sentence);
