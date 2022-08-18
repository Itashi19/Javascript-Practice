// function sayHello() {
//   console.log("Hello function");
// }

// sayHello(); //calling a function
//sayHello; //referencing the function

//context in javascript:
sayHello();
function sayHello() {
  console.log("Hello function");
}

//sayHello();
//Global context--->execution context->execution context
//In browser window object is there for gec->global
//execution context

//Execution context
// variable oject,scope chain,this keyword

// two rules
// functions declarations are scanned  and are made available
// variable declarations are scanned and made undefined.
//hoisting concept
//SCOPE CHAINING:
//ask help bigger than you
//not morally correct to ask from smaller one

var name1 = "Itashi"; //bigger guy
console.log("Line number 34", name1);

function sayName() {
  //small guy
  var name1 = "My H";
  console.log("Line Number 38", name1);
  sayName2();

  function sayName2() {
    //will go one level up so o/p myH
    console.log("Line number 39", name1);
  }
}

sayName();

//this keyword:
console.log(this);
