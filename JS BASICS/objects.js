var User = {
  name: "",
  getUserName: function () {
    console.log(`User name is ${this.name}`);
  },
};

var ita = Object.create(User);
console.log(ita);

//anonymous functions:

var sayHello = function () {
  console.log("I say Hello");
};

(function () {
  console.log("I say Hello");
})();

a()()(); //currying concept:

//Binding properties:

const Itashi = {
  firstName: "Itashi",
  lastName: "Chaudhary",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
        FirstName is ${firstName}

        `);
  },
};

//binds gives reference back whereas call directly calls the method.
