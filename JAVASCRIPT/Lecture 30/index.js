// function sum (a,...num) { //rest opertaor
//     let total  = a +  num[0] + num[1]
//     console.log(total)
// }

// sum(4,5,6);

// let obj = {
//     title:"Lecture 30",
//     tags:"lec30,rest,spread",
//     description:"helllo dosto"
// }

// function obj1({title, tags, description}){
//     // console.log(tags)
//     let tagsArray = tags.split(",")
//     console.log(tagsArray)
//     // ["lec30", "rest" , "spread"]
// }
// obj1(obj);

// let {title,...remaining} = obj
// console.log(remaining)

// let obj = {
//     title:"Lecture 30",
//     tags:"lec30,rest,spread",
//     description:"helllo dosto"
// }

// let arr = [4,5,67,42,5,334,345]
// let arr2 = [7,0,6,2,45,456]
// let newArray = [...arr] //spread
// console.log(newArray)

// let arr = [3,6,23,57,86]

// const hello = (arr) => console.log(arr)

// hello(arr)

// function print(val){
//  console.log(val)
// }

// arr.forEach((val) => console.log(val))

// function hello(arr) {
//     console.log(arr)
// }

// hello(arr)

// let arr = [3,6,23,57,86]

// const newArr = arr.map(function(val){
//      val *= 5;
//     return val
// })

// const newArr = arr.map((val) => val *= 5 )
// let arr = [3,6,23,57,86]
// const newArr = arr.filter((val) => val < 23)
// const newArr = arr.filter((val) => {
//     if(val <= 23){
//         return val
//     }
// })

// let arr = [3,6,23,57,86]
// let sum = 0;
// for (let i =0 ; i<arr.length ; i++){
//  sum +=arr[i] // sum = sum + arr[i] --> 0 + 3 = 3
// sum = sum + arr[i] --> 3 + 6 = 9
// sum = sum + arr[i] --> 9 + 23 = 32
// sum = sum + arr[i] --> 32  + 57 = 89
// sum = sum + arr[i] --> 89  + 86  = 175
// }
// console.log(sum)

// const newArr = arr.reduce((acc , cur) => acc += cur , 0)

// console.log(newArr)

let students = [
  { name: "Rinku", course: "Btech", branch: "cse" },
  { name: "Rohit", course: "Btech", branch: "civil" },
  { name: "Virat", course: "Btech", branch: "cse" },
  { name: "Mukesh", course: "Btech", branch: "mechanical" },
  { name: "Aksar", course: "Btech", branch: "civil" },
];

const newArr = students.filter((val) => {
    if(val.branch === 'civil'){
        return val
    }
}).map((val) => val.name)


console.log(newArr)

const obj = {
    name1: "Nishant",
    id1: 23134563,
    course1: "B.tech",
    Branch1: "Cse",
    hosteller1: false,
  };

 const obj2 = {
    name: "Nishant",
    id: 23134563,
    course: "B.tech",
    Branch: "Cse",
    hosteller: false,
  };

const newObj = {...obj, ...obj2}

let objjj = {
    name: "nishant",
    name:"rahul"
}
console.log(objjj)

// console.log(newObj)
