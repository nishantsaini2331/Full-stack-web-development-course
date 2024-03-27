function Category(category) {
    this.category = category;
}

function Food(name, price, category) {
    this.name = name;
    this.price = price;
    Category.call(this,category);
}

let newFood = new Food("Pizza", 1234, "fast food");
console.log(newFood);
