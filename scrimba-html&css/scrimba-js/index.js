function getUserCredentials(firstName, lastName, email) {
    return firstName + lastName + email
}

const cartItems = [
    { quantity: 1, price: 5 },
    { quantity: 3, price: 4 },
    { quantity: 10, price: 1}
];

function getPreTaxTotal(items) {
    let total = 0;

    for (item of cartItems) {
        total = total + item.price * item.quantity;
    }
    return total
}
// console.log(getUserCredentials('cedric', 10+23,"98"));


console.log(getPreTaxTotal(cartItems));