class Product {
    // category = 'electronics'
    constructor(name, price) {
        console.log(this)
        this.name = name;
        this.price = price;
    }

    productName() {
        console.log(this.name);
    }
}

let p1 = new Product("samsung", 234235);
let p2 = new Product("iphone 18", 123452135);
console.log(p1);
