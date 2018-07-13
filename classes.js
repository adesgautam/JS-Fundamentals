
// Classes

// Functional class
function Rect(a,b){
    this.a = a;
    this.b = b;
    this.show = function(){
        console.log(a,b);
    }
}
var f = new Rect(5,6);
f.show();

//Using prototype
Rect.prototype.sum = function(){
    return this.a+this.b;
}
console.log(f.sum());

// Object Literals
let Square = {
    width: 5,
    height: 10
}
console.log(Square.width, Square.height);

let car = new function(){
    this.fuel = 10;
    this.color = 'Red';
}
console.log(car.fuel, car.color);

// Class
class Fruit{
    constructor(color, weight){
        this.color = color;
        this.weight = weight;
    }
    show(){
        console.log(this.color, this.weight);
    }
}
let fr = new Fruit('Green', 50);
fr.show();
