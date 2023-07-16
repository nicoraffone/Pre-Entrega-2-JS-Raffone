class Order{
    constructor(product, price, amount){
        this.product = product;
        this.price = price;
        this.amount = amount;
        this.total = 0;
    };

    priceTotal(){
        this.total = (this.price * this.amount) * 1.21
    };

    getDiscount(){
        return this.total * 0.85
    }
}