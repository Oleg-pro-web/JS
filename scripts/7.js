// 1

const user = {
    userName: "Oleg",
    age: 15,
    showUserName() {
        console.log(this.userName);
    },
    updateAge() {
        this.age += 1;
    },
}
user.updateAge();
user.showUserName();

// 2

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

const allValues = Object.values(salaries);

var sum = 0;
for (const value of allValues) {
    sum += value;
}
console.log(sum);

// 3

let a = 0;
let b = 0;
const calculator = {

    read() {
        a = Number(prompt("First number:"));
        b = Number(prompt("Second number:"));
    },
    sum(a, b) {
        console.log(a + b);
    },
    mult(a, b) {
        console.log(a * b);
    }
}

calculator.read();
calculator.sum(a, b);
calculator.mult(a, b);

// 4

const cafe = {
    name: "Republic",
    width: 200,
    height: 300,
    personal: 5,
    hr: true
}

const elements = Object.entries(cafe);
for (const element of elements) {
    console.log(element);
}
console.log(cafe.width * cafe.height);