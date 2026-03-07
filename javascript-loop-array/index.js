for (i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 1) {
    console.log("ganjil", i);
  }
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log("genap", i);
  }
}

let array1 = [1, 2, 3, 4, 5, 6];

console.log(array1[5]);

let array2 = [5, 2, 4, 3, 1];

console.log(array2.sort((a, b) => a - b));

let array3 = [
  "selamat",
  "anda",
  "melakukan",
  "perulangan",
  "array",
  "dengan",
  "for",
];

for (let i = 0; i < array3.length; i++) {
  console.log(array3[i]);
}

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array4.length; i++) {
  if (array4[i] % 2 === 0) {
    console.log(array4[i]);
  }
}

let kalimat = ["saya", "sangat", "senang", "belajar", "javascript"];
console.log(kalimat.join(" "));

var sayuran = [];
sayuran.push(
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge",
);

console.log(sayuran);

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 3);
}
