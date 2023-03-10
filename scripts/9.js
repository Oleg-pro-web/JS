import users from "./users.js";

// 1

const getUserNames = (users) => {
    return users.map((user) => {
        return user.name;
    })
};

console.log(getUserNames(users));

// 2

const getUsersWithEyeColor = (users, color) => {
    return users.filter((user) => {
        return user.eyeColor === color;
    });
};

console.log(getUsersWithEyeColor(users, 'blue'));

// 3

const getUsersWithGender = (users, gender) => {
    return users.filter((user) => user.gender === gender).map((user) => user.name);
};

console.log(getUsersWithGender(users, 'male'));

// 4

const getInactiveUsers = users => {
    return users.filter((user) => {
        return !user.isActive;
    });
};

console.log(getInactiveUsers(users));

//  5

const getUserWithEmail = (users, email) => {
    return users.find((user) => {
        return user.email === email
    })
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));

//  6

const getUsersWithAge = (users, min, max) => {
    return users.filter((user) => {
        return min < user.age && user.age < max
    });
};

console.log(getUsersWithAge(users, 20, 30));

console.log(getUsersWithAge(users, 30, 40));

//  7

const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
}

console.log(calculateTotalBalance(users));

// 8

const getUsersWithFriend = (users, friendName) => {
    return users.filter((user) => {
        return user.friends.includes(friendName);
    }).map((user) => user.name)
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry')); 