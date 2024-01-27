// console.log("start ho gaya jji")

// var name3 = "codethread"

// for(let i  = 1 ;  i <= 10 ; i++) {
//     console.log(`${name3} ${i} `)
// }

// function funONE(){

//     return {"name" :"nishant"};
// }

// console.log(funONE())

// const naam = "codethread"

// var fun1 = () => {

//     return {"name" :"nishant"};
// }

// console.log(fun1())

// var  fun2 = function () {
//     return "this is function expression"
// }

// console.log(fun2())

// console.log(a);

// var a = 49;

// console.log(funOne())

// function funOne(){
//     console.log("function one")
//     // return 3;
// }

// arrowFun()

// let arrowFun = () => {
//     console.log("arrow function")
// }

// funExp()

// var funExp = function () {
//     console.log("Function exop")
// }

// function one(para, fun){ // parameters
//     console.log(fun)
//     console.log(para)
//     fun()
// }

// function two(){
//     console.log("heelo two")
// }

// one(45, () => {
//     console.log("anonymous function")
// }) // arguments

// CALLBACK FUNCTIONS

// function add (a , b) {
//     console.log(a + b)
// }
// function sub (a , b) {
//     // console.log(a - b)
//     return a-b
// }

// function calculateArith(num1 , num2 , fn){

//      return fn(num1 , num2)
// }

// const finalOutput = calculateArith(4 , 5, sub)

// console.log(finalOutput)

// CLOSURES

// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// console.log(myFunc)

// function counter(){
//     let count = 0
//     return function (fn){
//          return ++count + fn()
//     }
// }

// function one(){
//     return 56
// }

// const increment = counter()
// console.log(increment(one))


function person(){
    const name1 = "nishant"
    const name2 = "codethread"
    const obj = {
        first : function (){
            return name1
        },
        second: function () {
            return name2
        }
    }

    return obj
}

const output = person()
console.log(output.first ())