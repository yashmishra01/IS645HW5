class square {

    constructor(side) {
        this.side = side;
        this.describe();
    }
    perimeter() {
        return 4 * this.side;
    }
    area() {
        return this.side * this.side;
    }
    diagonal() {
        return Math.sqrt(2 * this.side * this.side);
    }
    describe() {
        let perimeter = this.perimeter();
        let area = this.area();
        let diagonal = this.diagonal();
        return "Square with side " + this.side +
            " has perimeter " + perimeter + " area of " + area + ", and diagonal of " + diagonal;
    }
}

const sq1 = new square(4);
console.log(sq1.describe());
const sq2 = new square(2);
console.log(sq2.describe());
const sq3 = new square(3);
console.log(sq3.describe());