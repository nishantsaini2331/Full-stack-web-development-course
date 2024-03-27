// let obj = {
//     username: "nishant",
//     email: "123@gmail.com",
//     printName() {
//         console.log(this.username);
//     },
// };
// obj.printName();
// console.log(obj)

// function h(){
//     console.log(this)
// }
// console.log(this)
// h()

// let prod1 = {
//     name : 'iphone 15',
//     price : 123455
// }
// let prod2 = {
//     name : 'iphone 16',
//     price : 1234558
// }
// console.log(prod1)
// console.log(prod2)

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.productName = function () {
        console.log(this.name);
    };
}

let p1 = new Product("iphone 17", 123452135);
let p2 = new Product("iphone 18", 123452135);

console.log(p1.productName());
