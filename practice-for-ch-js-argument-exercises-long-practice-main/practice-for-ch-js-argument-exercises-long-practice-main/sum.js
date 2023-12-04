function sum(...args) {
    let total = 0; // counter

    for (const arg of args) { // note the notation used here for '...' statements ==> actual array
        total += arg;
    }
    return total
};

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

// =======================

function sum() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]; // array-like
    }
    return total
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

