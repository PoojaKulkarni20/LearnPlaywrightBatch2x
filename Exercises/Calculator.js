class Calculator{
    contructor(a, b){
        this.a = a;
        this.b = b;
    }
    Addition(a,b){
       return a+b;}
    Subtraction(a,b){
     return a-b;}
    Multiplication(a,b){
        return a*b;}
    Division(a,b){
        return a/b;}
    Modulus(a,b){
        return a%b;}
}

const add = new Calculator();
const sub = new Calculator();
const div = new Calculator();
const mul = new Calculator();
const mod = new Calculator();
console.log(add.Addition(10, 20)); // 30
console.log(sub.Subtraction(50, 30)); // 20
console.log(mul.Multiplication(5, 3)); // 15
console.log(div.Division(20, 5)); // 4
console.log(mod.Modulus(10, 3)); // 1