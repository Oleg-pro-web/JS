// 1

console.log("Ex/1");
let Arr1 = [1, 5, "4", "hello"];
let Arr2 = [true, 2, {}, ["a"], 222];

console.log(Arr1[1]);
console.log(Arr2[1]);
console.log(Arr1[1] + Arr2[1]);

// 2

console.log("Ex/2");
let lastArr1Elem = Arr1.length - 1;
Arr1.push(22);
console.table(Arr1);

// 3

console.log("Ex/3");
for (const elem of Arr2) {
    console.log(elem);
    console.log(typeof elem);
}

// 4

console.log("Ex/4");
const message = 'Welcome to Ukraine!';
const ArrMade = message.split(" ");
console.log(ArrMade);
console.log(message.split("").indexOf("l"));
console.log(ArrMade.join(" "));

// 5

console.log("Ex/5");
let styles = ["Джаз", "Блюз"];
styles.unshift("Рок-н-ролл");
styles.splice(1, 1, "Класика");
styles.shift();
styles.unshift("Реп", "Реггі");
console.log(styles);
