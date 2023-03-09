// 1

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const playersName = players.map(function ({ name }) {
    return name;
});
let playerIdToUpdate = 'player-3';
const timeIncrease = players.map((player) => {
    if (playerIdToUpdate === player.id) {
        return player.timePlayed += 100;
    };
});

console.log(playersName);
console.log(players);

// 2
const cart = {
    items: [

    ],
    getItems() { },
    add(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quontity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quontity: 1
        }

        this.items.push(newProduct);
    },
    remove(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quontity -= 1;
                return;
            }
        }
    },
    clear() {
        this.items.length = 0;
    },
    countTotalPrice() {
        var total = 0
        for (const item of this.items) {
            total += item.price;
            if (item.quontity > 1) {
                for (let i = 1; i < item.quontity; i++) {
                    total += item.price;
                }
            }
        }
        console.log(total);
    },
    increaseQuantity(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quontity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quontity: 1
        }

        this.items.push(newProduct);
    },
    decreaseQuantity(product) {
        for (const item of this.items) {
            if (item.name === product.name) {
                item.quontity -= 1;
                return;
            }
        }
    },
};
cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍇', price: 70 });
cart.add({ name: '🍋', price: 70 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });
cart.remove({ name: '🍓', price: 110 });
cart.countTotalPrice();


console.log(cart.items);
