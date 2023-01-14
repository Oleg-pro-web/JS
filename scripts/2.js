// 1

const k1 = parseInt("5px");
const k2 = parseInt("12djd334");
const k3 = parseInt("12.45asdwe12");
const k4 = parseInt("qwqweeewq");
console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);

// 2

const k5 = parseFloat("5px");
const k6 = parseFloat("12djd334");
const k7 = parseFloat("12.45asdwe12");
const k8 = parseFloat("qwqweeewq");
console.log(k5);
console.log(k6);
console.log(k7);
console.log(k8);

// 3

console.log(`Min: ${Math.min(2, 34, 99, 3, 22, 36, 733, 18)}`);
console.log(`Max: ${Math.max(2, 34, 99, 3, 22, 36, 733, 18)}`);

// 4

const random = (Math.random() * (19 - 3) + 3);
console.log(random);

// 5

const result = 5 + 5 + '5';
console.log(`Result: ${result} - ${typeof result}`);

// 6

const myEmail = "andrishkooleg@gmail.com";
console.log(myEmail.includes("@"));
console.log(myEmail.length);

// 7

const a1 = "My";
const a2 = "name";
const a3 = "is";
console.log(`${a1} ${a2} ${a3} Viktor`);

// 8

const userName = "Олександро";
const payment = 300;
console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень.`);