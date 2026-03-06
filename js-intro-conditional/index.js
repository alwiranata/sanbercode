//1
let namaLengkap = "Aldo Wiranata";
console.log(namaLengkap);

//2
let word = "js";
let second = " is";
let third = " awesome";

//3
let gabung = word + second + third;
console.log(gabung);

let hello = "hello";
let world = " world";
console.log(hello + world);

//4
let panjangPersegiPanjang = "8";
let lebarPersegiPanjang = "5";

let keliling = 2 * (panjangPersegiPanjang + lebarPersegiPanjang);
console.log(keliling);

//5
let sentences = "wah javascript itu keren sekali";

let firstWords = sentences.substring(0, 3);
let secondWords = sentences.substring(4, 14);
let thirdWords = sentences.substring(15, 18);
let fourthWords = sentences.substring(19, 24);
let fifthWords = sentences.substring(25, 31);

console.log("Kata Pertama: " + firstWords);
console.log("Kata Kedua: " + secondWords);
console.log("Kata Ketiga: " + thirdWords);
console.log("Kata Keempat: " + fourthWords);
console.log("Kata Kelima: " + fifthWords);

//6
var sentence = "I am going to be React JS Developer";

var exampleFirstWord = sentence[0];
var exampleSecondWord = sentence[2] + sentence[3];
var thirdWord =
  sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence[14] + sentence[15];
var sixthWord =
  sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24];
var eighthWord =
  sentence[26] +
  sentence[27] +
  sentence[28] +
  sentence[29] +
  sentence[30] +
  sentence[31] +
  sentence[32] +
  sentence[33] +
  sentence[34];

console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);
console.log("First Word: " + exampleFirstWord);
console.log("Second Word: " + exampleSecondWord);
console.log("Third Word: " + thirdWord);
console.log("Fourth Word: " + fourthWord);
console.log("Fifth Word: " + fifthWord);
console.log("Sixth Word: " + sixthWord);
console.log("Seventh Word: " + seventhWord);
console.log("Eighth Word: " + eighthWord);

//7
let txt = "I can eat bananas all day";
let hasil = txt.split(" ")[3];

console.log(hasil);

//8
var nilai = 50;

if (nilai >= 80) {
  console.log("A");
} else if (nilai >= 70 && nilai < 80) {
  console.log("B");
} else if (nilai >= 50 && nilai < 60) {
  console.log("C");
} else {
  console.log(50);
}

//9
let angka = 2;

angka === 2 ? console.log("Angkanya 2") : console.log("bukan angka 2");

//10

var traffic_light_red = "red";

switch (traffic_light_red) {
  case "red":
    console.log("Stop");
    break;
  case "orange":
    console.log("careful");
  case "green":
    console.log("go");
    break;
  default:
    console.log("Wrong Value");
    
}
