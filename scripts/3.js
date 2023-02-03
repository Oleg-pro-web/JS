// 1

const number = prompt("Type a number:");
if (number >= 55 && number <= 99) {
    console.log("Число потрапляє в діапазон")
} else {
    console.log("Число не потрапляє в діапазон")
}

// 2
let maxsAge = 55;
if (maxsAge <= 16) {
    console.log("діти");
} else if (maxsAge >= 17 && maxsAge <= 60) {
    console.log("дорослі");
} else {
    console.log("пенсіонери ");
}

// 3

let fName = "Віктор";
let sName = "Сташко";
if (fName.length > 4 && sName.length > 5) {
    console.log(`${fName} ${sName} ${fName.length + sName.length}`)
}

// 4

let random = Math.round(Math.random() * (5 - 1) + 1);
if (random == 1) {
    console.log(1);
} else if (random == 2) {
    console.log(2)
} else if (random == 3) {
    console.log(3)
} else if (random == 4) {
    console.log(4)
} else {
    console.log(5)
}

// 5

let lang = prompt("ua, en, ru, fr:");
let message;
switch (lang) {
    case "ua":
        message = "січень";
        break;
    case "en":
        message = "january";
        break;
    case "ru":
        message = "январь";
        break;
    case "fr":
        message = "janvier";
        break;
}
console.log(message)