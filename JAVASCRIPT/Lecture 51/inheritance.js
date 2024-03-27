function Category(category) {
    this.category = category;
}

Category.prototype.printHello = function () {
    console.log("heello");
};

function Food(name, price, category) {
    this.name = name;
    this.price = price;
    Category.call(this, category);
}

Food.prototype = Object.create(Category.prototype);

let newFood = new Food("Pizza", 1234, "fast food");
newFood.printHello();
