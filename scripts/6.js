// 1

const hello1 = function () {
    return ("Привіт JavaScript");
}

console.log(hello1());

// 2

function hello2(name) {
    console.log(`Hello ${name}`);
}
hello2("Василь");

// 3

function mul(n, m) {
    console.log(n * m);
    console.log(n + m);
    console.log(n - m);
}
mul(5, 6);

// 4

const myNewArrowFunction = (...rest) => {
    console.log(...rest);
}

myNewArrowFunction(1, 2, 3);
myNewArrowFunction(100, 200, 300, 400, 500);
myNewArrowFunction("Js", "Python", "Java", "PHP", "C++");

// 5

const myAverageScore = function (arr) {
    let totalScore = 0;
    for (const element of arr) {
        totalScore += element;
    }
    totalScore = totalScore / arr.length;
    if (91 <= totalScore) {
        return ("Myaveragescore: A");
    } else if (81 <= totalScore && totalScore <= 90) {
        return ("Myaveragescore: B");
    } else if (71 <= totalScore && totalScore <= 80) {
        return ("Myaveragescore: C");
    } else {
        return ("Myaveragescore: D");
    }
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));