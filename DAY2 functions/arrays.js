//declare  arrays:
var countries = ["India", "USA", "Japan", "Russia"];
var states = new Array("Rajasthan", "Delhi", "Mumbai", "Assam");

console.log(states[0]);

console.log(states.length);

states[0] = "Punjab";
console.log(states);

states.pop();
states.pop();
console.log(states);
states.unshift("new"); // adds value at the first
console.log(states);
states.shift();
console.log(states); //deletes first value

console.log(states.indexOf(3));

console.log(Array.from("Itashi")); //converting to array
