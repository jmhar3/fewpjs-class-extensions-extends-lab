// Your code here
class Polygon {
    constructor(arr) {
        this.arr = arr;
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce(sum)

        function sum(acc, num) {
            return acc + num
        }
    }
}

class Triangle extends Polygon {
    get isValid() {
        if(this.countSides === 3) {
            let a = this.arr[0]
            let b = this.arr[1]
            let c = this.arr[2]
            return ((a + b > c) && (b + c > a) && (c + a > b))
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if(this.countSides === 4) {
            let a = this.arr[0];
            let b = this.arr[1];
            let c = this.arr[2];
            let d = this.arr[3];
            return (a === b) && (a === c) && (a === d);
        }
    }

    get area() {
        let a = this.arr[0];
        return a * a;
    }
}