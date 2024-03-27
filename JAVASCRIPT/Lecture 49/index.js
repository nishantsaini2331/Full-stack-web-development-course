class Product {
    constructor(name, price) {
        console.log("hello");
        this.name = name;
        this.price = price;
    }

    printName() {
        return this.name;
    }
}

let newProduct = new Product("Mic", 5000);
console.log(newProduct);
