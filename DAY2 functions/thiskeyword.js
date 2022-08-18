//this keyword concept:
console.log(this);

var game = "abc";

function sayName() {
  var name = "Itashi";
  console.log(this);
}

sayName();

//incase of editor ->it gives empty scope{}
//in case of browser it gives access to the window object
