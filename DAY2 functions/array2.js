//arrow function
var iseven = (element) => {
  return element % 2 === 0;
};

console.log(iseven(2));

//callback function:

var result = [2, 4, 6, 8].every(iseven);
console.log(result);

//callbacks:function without name
//curly braces-->with return keywoord
var result = [2, 4, 6, 8].every((e) => {
  return e % 2 === 0;
});
console.log(result);

//fill and filter method:

var testArray = [2, 4, 6, 3, 1, 5];
console.log(testArray.fill("h", 2, 5));

//here 2 is inclusive and 5 is exclusive

const my = [23, 24, 25, 55, 66];
const res = my.filter((num) => num != 55);
console.log(res);

//Slice and Splice in JS

//in range first value is inclusive and last value
//is exclusive

var users = ["Ted", "Tim", "Ton", "Sam"];
console.log(users.slice(1, 3));

users.splice(1, 2, "HI");

//2 here is count
//start from 1 and then count 2 that is delete it.

console.log(users);

//OBJECTS:

var user = {
  firstName: "Itashi",
  lastName: "Pathria",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
};
console.log(user.firstName);
console.table(user);
