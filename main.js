
// 問題1
const a = 10;
const b = 5;

console.log(a * b);


const c = a + b;

// 問題2

function isEven(c) {
    if (c) {
        return "偶数";
    } else {
        return "奇数";
    }
}
console.log(isEven(c));

// 問題3
const arrray = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arrray.length; i++) {
    sum += arrray[i];
}

console.log(sum);


const array = [1, 2, 3, 4, 5];

const result = array.map((number) => {
    return number * 2;
});

console.log(result);

// 問題4

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello, World!"));

// 問題5

function max3(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}
console.log(max3(10, 20, 15));

// 問題6

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));

// 問題7

const users = [
    { name: "太郎", age: 25 },
    { name: "花子", age: 30 },
    { name: "次郎", age: 20 },
];

const result2 = users
    .filter(user => user.age >= 25)
    .map(user => user.name);

console.log(result2);

// 問題8


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}


// 問題9

function unique(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(unique([1, 2, 2, 3, 1, 4, 3]));

// 問題10

const items = [
    { price: 100, quantity: 2 },
    { price: 200, quantity: 1 },
    { price: 150, quantity: 3 }
];

const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);

console.log(total);

// 問題11

async function fetchData() {
    try {
        const response =  await fetch("/api/data");
        const data =  await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// 問題12


