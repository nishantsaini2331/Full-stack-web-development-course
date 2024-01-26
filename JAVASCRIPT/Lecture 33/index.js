// var num1 = 2 ;
// var num2 = 5 ;

// function add(a , b){
//     var total = a + b;
//     return total
// }

// var sum = add(num1, num2);
// console.log(sum)

let a = "nishant"

function one() {
  var a = "hello1";
  console.log("inside one");
  function two() {
    let b = "heello2";
    console.log("inside two");
    function three() {
      let c = "heello3";
      console.log("inside three");
    }
    three();
  }
  two();
}
one();
