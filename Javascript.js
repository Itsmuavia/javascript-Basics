
// // Hoisting

// console.log(x)
// var x= "Ali";




// // Closure


// function outer() {
//     let name;
//     return function inner() {
//         name="Ali"
//         console.log("My name is",name);
//     };
// }
// const counter = outer();
// counter();



// // Closure


// function data() {
//     let name;
//     let age;
//     return function person() {
//         name;
//         age;
//         console.log("My name is", name = "ali", "and age ", age = "21")
//     };
// }

// const details = data();
// details();



// // arrow function      ik function is method se ban skta hai arrow ki help se


// const add = (a, b) => (a + b);

// console.log(add(100, 25));



// // arrow function                  ik function is method se ban skta hai function parameter ki help se


// function add() {
//     var a = 100;
//     var b = 25
//     console.log(a + b)

// }
// add();




// document.getElementById("parent").addEventListener("click", function () {
//     alert("parent is clicked in button");
//     console.log(2+2)

// }, true)

// document.getElementById("child").addEventListener("click", function () {
//     alert("child is clicked in button");
//     console.log(4+4)


// }, false)



// // promise      asynchronous 

// let promise = new Promise((solve, problem) => {
//     let success = "alina";
//     if (success == "umar") {
//         solve("Problem solved");
//     }
//     else { problem("Not solve") }
// })
// promise.then(data => console.log(data))
//     .catch(error => console.log(error))


// // this keyword

// var name;
// var age;
// const data = {
//     name: "ali",
//     age: 21,
//     greet() {
//         console.log("My name is", this.name, "and my age is", this.age);
//     }
// };

// data.greet();


// //Asynchronous with call back


// console.log("Start");

// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data loaded");
//   }, 2000);
// }

// fetchData(result => {
//   console.log(result);
// });

// console.log("End");














