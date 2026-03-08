function cetakFunction() {
  return "Sukses";
}

console.log(cetakFunction());

function price(a, b) {
  return a + b;
}

const nilai1 = 20;
const nilai2 = 7;

let output = price(nilai1, nilai2);
console.log(output);

const hello = () => {
  console.log("hello");
};

hello();

let obj = {
  nama: "john",

  umur: 22,

  bahasa: "indonesia",
};

console.log(obj.bahasa);

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku", 1992];
let objDaftarPeserta = {
  nama: arrayDaftarPeserta[0],
  jenisKelamin: arrayDaftarPeserta[1],
  book: arrayDaftarPeserta[2],
  date: arrayDaftarPeserta[3],
};
console.log(objDaftarPeserta);

let fruits = [
  {
    nama: "Nanas",
    warna: "Kuning",
    adaBiji: false,
    harga: 9000,
  },
  {
    nama: "Jeruk",
    warna: "Oranye",
    adaBiji: true,
    harga: 8000,
  },
  {
    nama: "Semangka",
    warna: "Hijau  & Merah",
    adaBiji: true,
    harga: 10000,
  },
  {
    nama: "Pisang",
    warna: "Kuning",
    adaBiji: false,
    harga: 5000,
  },
];

let buahTanpaBiji = fruits.filter(function (item) {
  return item.adaBiji === false;
});

console.log(buahTanpaBiji);

let phone = {
  name: "Galaxy Fold 5",
  brand: "Samsung",
  year: "2023",
};

const { name, brand, year } = phone;

console.log(name, brand, year);

let dataBukuTambahan = {
  penulis: "John Doe",
  tahunTerbit: 2020,
};

let buku = {
  nama: "Pemograman dasar",
  jumlahHalaman: 172,
};

let objOutput = {};

objOutput = { ...buku, ...dataBukuTambahan };
console.log(objOutput);

let mobil = {
  merk: "bmw",
  color: "red",
  year: "2002",
};

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil))