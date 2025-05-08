function multiplyBy(x) { 
    return function(y) {
        return x * y;
    }
}
const double = multiplyBy(2);
console.log(double(5));