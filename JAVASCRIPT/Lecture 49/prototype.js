// let str = 'nishant'
// console.log(str)

// let arr = [1, 2, 3];

// let num = 21;
// let x = {};

// Object.prototype.print = function () {
//     console.log("from object proto");
// };

// Array.prototype.forArr = function (arr) {
//     for (let index = 0; index < arr.length; index++) {
//         console.log(arr[index]);
//     }
// };

// arr.print();
// arr.forArr(arr);
// function fun1() {}

// console.log(arr)
// arr.print()
// console.log(num.__proto__.constructor)
// num.print()
// console.log(x.__proto__)


// let arrr333 = [123,234,53,25,14,421]

// arrr333.forArr(arrr333)

let a1 = {}

a1.heelo = function(){
    console.log("kya hal hai")
}

let a2 = {}
Object.setPrototypeOf(a2,a1)

console.log(a1)
console.log(a2)