console.log("inside warmup file");
//circle calculator excercies
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    getDiameter(){
        return 2 * this.radius;
    }
    getCircumference(){
        return 2 * this.radius * Math.PI;
    }
    getArea(){
        return Math.pow(this.radius, 2) * Math.PI;
    }
}
const circle = new Circle(10);

console.log(circle.getDiameter());
console.log(circle.getCircumference());
console.log(circle.getArea());