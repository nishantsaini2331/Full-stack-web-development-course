// function hello(text, para) {
//     console.log("inside heelo");
//     para(text);
// }

// hello("Heello", function cb(data) {
//     console.log("inside callback", data);
// });

// function fun1(text) {
//     let a = 4;
//     function fun2() {
//         console.log(a + " " + text);
//     }
//     a = 50;
//     text = "nice"
//     return fun2;
// }

// let res = fun1("from fun 1");
// function heelllo(){
//     console.log("heelo")
// }

// setInterval(heelllo, 1000);

// const body = document.getElementsByTagName("body");

// let colorString = "0123456789abcdef";

// function colorChange() {
//     let color = "";
//     for (let i = 0; i < 6; i++) {
//         let randNum = Math.floor(Math.random() * colorString.length);
//         color = color + colorString[randNum];
//     }

//     body[0].style.backgroundColor = `#${color}`;
// }

// setInterval(colorChange, 10000);

// setTimeout(function () {
//     console.log("Set timeout");
// }, 1000);

// console.log("step 1")
// setTimeout(function () {
//     console.log("step 2");
// });
// console.log("step 3")

// console.log("heelo 1")
// console.log("heello 2")
// setTimeout(() => {
//     for(let i = 0 ; i < 10000000000 ; i++){

//     }
// } , 5000)
// console.log("heelloo 3")

// function fun1(text) {
//     console.log("staring fun");
//     setTimeout(function hello() {
//         console.log(text);
//     }, 4000);
//     console.log("ending fun");
//     text = "changed";
// }
// fun1("nice");

// function fun1() {
//     for (var i = 0; i < 5; i++) {
//         function inner(i){
//             setTimeout(function hello() {
//                 console.log(i);
//             }, i*1000);
//         }
//         inner(i)
//     }
// }
// fun1();

// function fun1() {
//     for (var i = 0; i < 5; i++) {
//         let j = i;
//             setTimeout(function hello() {
//                 console.log(j);
//             }, j*1000);
//     }
// }
// fun1();

// console.log("starting");
// setTimeout(function hello() {
//     console.log("setTimeOut 1");
// }, 5000);
// setTimeout(function hello() {
//     console.log("setTimeOut 2");
// }, 5000);
// console.log("Ending");

// function helo() {
//     console.log("starting");
//     for (let i = 0; i < 10000000000; i++) {

//     }
//     setTimeout(function hello() {
//         console.log("setTimeOut 1");
//     }, 5000);
//     setTimeout(function hello() {
//         console.log("setTimeOut 2");
//     }, 3000);
//     console.log("Ending");
// }
// helo();