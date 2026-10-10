
// 問題1[変数aとbを定義し、足し算・引き算・乗算・除算の結果をそれぞれ出力してください。]
const a = 10;
const b = 5;

console.log(a * b);


const c = a + b;

// 問題2[与えられた数値が偶数か奇数かを判定する関数isEven(n)を作成してください。]

function isEven(c) {
    if (c) {
        return "偶数";
    } else {
        return "奇数";
    }
}
console.log(isEven(c));

// 問題3[配列[1, 2, 3, 4, 5]の全要素の合計をfor文で計算してください。]
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

// 問題4[文字列を受け取り、それを逆順にして返す関数reverseString(str)を作成してください。]

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello, World!"));

// 問題5[if文を使って、3つの数値のうち最大値を求める関数max3(a, b, c)を作成してください。]

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

// 問題6[配列[5, 3, 8, 1, 9, 2]をsort()を使わずにバブルソートで昇順に並び替える関数を実装してください。]

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

// 問題7[オブジェクトの配列から、年齢が25歳以上のユーザーの名前だけを抽出して新しい配列を作成してください。]

const users = [
    { name: "太郎", age: 25 },
    { name: "花子", age: 30 },
    { name: "次郎", age: 20 },
];

const result2 = users
    .filter(user => user.age >= 25)
    .map(user => user.name);

console.log(result2);

// 問題8[次のコードの出力結果を予想し、理由を説明してください。（varをletに変えるとどう変わるか）]


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}


// 問題9[配列内の重複を除去する関数unique(arr)をSetを使わずに実装してください。]

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

// 問題10[reduceを使って、配列[{price: 100}, {price: 200}, {price: 300}]の合計金額を求めてください。]

const items = [
    { price: 100, quantity: 2 },
    { price: 200, quantity: 1 },
    { price: 150, quantity: 3 }
];

const total = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
}, 0);

console.log(total);

// 問題11[次のコードをasync/awaitを使って書き直してください。]

async function fetchData() {
    try {
        const response = await fetch("/api/data");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


// 問題12[カウンターを生成するクロージャcreateCounter()を実装してください。呼び出すごとに1増えるincrement()と現在値を返すgetCount()を持つオブジェクトを返してください。]
function createCounter() {
    let count = 0;
    return {
        increment: function () {
            count++;
        },
        getCount: function () {
            return count;
        }
    }
};

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2


// 問題13[複数のPromiseを並列実行し、すべて完了したら結果をまとめる処理をPromise.allを使わずに自作してください（myPromiseAll(promises)）。]
function myPromiseAll(promises) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then((result) => {
                    results[index] = result;
                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }
                })
                .catch((error) => {
                    reject(error);
                });
        });
    });
}

// 以下と同じ
// const results = await Promise.all([
//   Promise.resolve(100),
//   Promise.resolve(200),
//   Promise.resolve(300)
// ]);

// console.log(results); // [100, 200, 300]


// 問題14[次のthisの挙動の違いを説明し、実際に動作するコードを書いてください。]
const obj = {
    value: 42,
    regular: function () { return this.value; },
    arrow: () => { return this.value; }
}

console.log(obj.regular());
console.log(obj.arrow());

// arrowで42を取る方法
// const obj = {
//   value: 42,
//   regular: function() { return this.value; },
//   arrow() { return this.value; },       // 短縮メソッド記法（通常関数と同じ）
//   arrow2: () => obj.value,              // アロー関数のまま直接参照
// };


// 問題15[debounce関数（連続呼び出しを間引く関数）を実装してください。]
function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
}


// 問題16[文字列が回文（前から読んでも後ろから読んでも同じ）かどうかを判定するisPalindrome(str)を作成してください。大文字小文字とスペースは無視します。]
function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/\s/g, "");
  const reversed = normalized.split("").reverse().join("");
  return normalized === reversed;
}

console.log(isPalindrome("level"));                        // true
console.log(isPalindrome("A man a plan a canal Panama"));  // true
console.log(isPalindrome("hello"));                        // false
console.log(isPalindrome(""));                             // true（空文字は回文として扱う）


// 問題17[1から100まで順に出力します。3の倍数ならFizz、5の倍数ならBuzz、両方の倍数ならFizzBuzz、それ以外は数値をそのまま出力してください。]
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 問題18[文字列に含まれる母音（a, e, i, o, u）の数を返すcountVowels(str)を作成してください。]
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// 問題19[配列の最大値と最小値を、Math.maxやMath.minを使わずに{ max, min }として返すfindMinMax(arr)を作成してください。]
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return { min, max };
}

findMinMax([3, 7, 1, 9, 4]);   // → { max: 9, min: 1 }
findMinMax([5]);               // → { max: 5, min: 5 }
findMinMax([-3, -8, -1]);      // → { max: -1, min: -8 }

// 問題20[正の整数が素数かどうかを判定するisPrime(n)を作成してください。]
// 問題21[配列のグルーピング。オブジェクトの配列を、指定したキーでグループ分けするgroupBy(arr, key)を作成してください。]
// 問題22[配列のフラット化（flatを使わない）。ネストした配列を、flat()を使わずに1次元にするflatten(arr)を作成してください。再帰を使います。]
// 問題23[文章中の各単語が何回出てくるかを数えるwordCount(text)を作成してください。]
// 問題24[オブジェクトのディープコピー。JSON.parse(JSON.stringify(...))やstructuredCloneを使わずに、ネストしたオブジェクトや配列を完全に複製するdeepClone(obj)を作成してください。]
// 問題25[関数の合成（compose）。複数の関数を右から左へ順に適用するcompose(...fns)を作成してください。reduceを使います。]