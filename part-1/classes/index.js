//class = (ES6 feature) provide a more structured and cleaner way to
// work with objects compared to traditional constructor function
// ex. static keyword, encapsulation. inheritance

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    
    displayProduct(){
        console.log(`Product: $${this.name}`);
        console.log(`price: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salseTaxe){
        return this.price + (this.price * salseTaxe);
    }
}
const salseTaxe = 0.05

const product1 = new Product("shirt", 19.99)
const product2 = new Product("pant", 22.)
const product3 = new Product("underwear", 100.00)

product1.displayProduct();

const total = product1.calculateTotal(salseTaxe);
console.log(`Total price (with tax): $${total.toFixed(2)}`)

