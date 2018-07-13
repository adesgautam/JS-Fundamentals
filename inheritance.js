
// Base class
class Fruit{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    show(){
        console.log(this.name, this.color);
    }
}

// Sub-class, Apple inherits from Fruit
class Apple extends Fruit{
    constructor(name, color, region){
        super(name, color);
        this.region = region;
    }
    show(){
        // super.show();
        console.log(this.name, this.color, this.region);
    }
}
// Add function to Apple Class
Fruit.prototype.showColor = function(){
    console.log(this.color);
}

var a = new Apple('My Apple', 'Red', 'Himachal Pradesh');
a.show();
a.showColor(); 
