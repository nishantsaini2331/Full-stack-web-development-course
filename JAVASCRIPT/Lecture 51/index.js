let obj1 = { a: 5 };

// console.log(ob1)

// let obj2 = Object.create(ob1)

// console.log(obj2.a)

let c = {};
let d = Object.create(obj1, { name: { value: "Nishant" } });
// d.name = "Nishant";
console.log(d);
