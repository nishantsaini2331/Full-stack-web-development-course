class Category {
    constructor(category) {
        this.category = category;
    }

    printHello() {
        console.log("heello");
    }
}

class Food extends Category {
    constructor(name, price, category) {
        super(category).printHello();
        this.name = name;
        this.price = price;
    }
}

let newFood = new Food("Burger", 1321, "Fast Food");
// newFood;