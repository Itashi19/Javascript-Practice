var user = {
  firstName: "Itashi",
  lastName: "Pathria",
  role: "Admin",
  loginCount: 32,
  facebookSignedIn: true,
  courseList: [],
  buyCourse: function (courseName) {
    this.courseList.push(courseName);
  },
  //defining function inside objects:
  getCourseCount: function () {
    return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
  },
};
// console.log(user.firstName);
// console.table(user);
// console.log(user.getCourseCount());

// //LOOPS concept:

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

const myStates = ["Rajasthan", "Delhi", "Assam", 1947, "Maharashtra"];

for (let i = 0; i < myStates.length; i++) {
  if (typeof myStates[i] != "string") continue;
  console.log(myStates[i]);
}

//while and do while:

//for each loop:

myStates.forEach((s) => console.log(s));

//for in and for of loop:
//for of used for array
//for in is used for objects
const names = ["Youtube", "facebook", "Insta", "Netflix", "Amazon"];
for (const n of names) {
  console.log(n);
}

const symbols = {
  yt: "Youtube",
  fb: "facebook",
  ig: "Instagram",
  lco: "learncode",
};

for (const n in symbols) {
  console.log(`Key is ${n} and value is :${symbols[n]}`);
}

//this:
//for all regular function calls this point to window/global
//object

// for the object call it will be pointing to the current object
