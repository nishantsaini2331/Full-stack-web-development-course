function Product(name, price) {
    this.name = name;
    this.price = price;
}



let newProduct = new Product("Tablet", 13244);
newProduct.__proto__.hello = function () {
    console.log("helloo new product");
};
Product.prototype.print = function () {
    console.log("heelo");
};
console.log(newProduct);
