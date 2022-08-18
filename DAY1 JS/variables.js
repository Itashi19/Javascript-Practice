var fullName = "Itashi";
var email = "abc@gmail.com";
var password = "123456";
var confirmpass = "123456";
var courseCount = 0;
var isLogged = false;
const uid = 123;

//const is used whenever we need to declare a variable whose
//value we donot want to change

//in case of var values can be modified

//to take input
// we use prompt("Enter your name");

console.log(uid);

//in world of Js this backtick method is known as interpolation
console.log(
  `Uid is:${uid}
    email is:${email}
    password is:${password}
    fullName is:${fullName}
    
    `
);
