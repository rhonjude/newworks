const cart ={
    
    addItem:function($name,$quantity){
        console.log(`${$name} added to cart, quantity:${$quantity}`);

    },
    removeItem:function(){
        console.log(`removing item from the cart`);
    },
    checkOut:function(){
        console.log(`checking out item`);
    }
}
cart.addItem("book",1);
cart.removeItem();
cart.checkOut();

console.log("done");