// 1

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// 2

for (i = 1; i < 11; i++) {
    if (i % 2 == 0) {
        console.log(`${i} - Число парне`);
    } else {
        console.log(`${i} - Число непарне`)
    }
}

// 3

let num = 20;
do {
    num++;
    console.log(num)
} while (num <= 28);

// 4


do {
    var hName = prompt("Hero:");
    console.log(hName);
} while (hName.length < 6);
