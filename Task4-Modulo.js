// buat array dengan 100 nilai random (1 sampai 50)
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 50) + 1);
}

let arrGenap = [];
let arrGanjil = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    arrGenap.push(arr[i]);
  } else {
    arrGanjil.push(arr[i]);
  }
}

// Mencetak hasil perhitungan nilai statistik dari kedua
let minGenap = Math.min(...arrGenap);
let maxGenap = Math.max(...arrGenap);
let totalGenap = arrGenap.reduce((a, b) => a + b, 0);
let rataGenap = totalGenap / arrGenap.length;

let minGanjil = Math.min(...arrGanjil);
let maxGanjil = Math.max(...arrGanjil);
let totalGanjil = arrGanjil.reduce((a, b) => a + b, 0);
let rataGanjil = totalGanjil / arrGanjil.length;

let hasilBanding = "";
if (minGenap > minGanjil) {
  hasilBanding += "Min lebih besar array genap\n";
} else {
  hasilBanding += "Min lebih besar array ganjil\n";
}

if (maxGenap > maxGanjil) {
  hasilBanding += "Max lebih besar array genap\n";
} else {
  hasilBanding += "Max lebih besar array ganjil\n";
}

if (totalGenap === totalGanjil) {
  hasilBanding += "Total memiliki nilai sama antara array genap dan ganjil\n";
} else {
  hasilBanding +=
    "Total tidak memiliki nilai sama antara array genap dan ganjil\n";
}

if (rataGanjil > rataGenap) {
  hasilBanding += "Rata-rata lebih besar array ganjil\n";
} else {
  hasilBanding += "Rata-rata lebih besar array genap\n";
}

console.log("Nilai Random 1-50", arr);
console.log("Array Genap", arrGenap);
console.log("Array Ganjil", arrGanjil);
// Mencetak hasil perhitungan nilai statistik dari kedua array
console.log("Array pada index genap:");
console.log("Min", minGenap);
console.log("Max", maxGenap);
console.log("Total", totalGenap);
console.log("Total", rataGenap);

console.log("\nArray pada index ganjil:");
console.log("Min", minGanjil);
console.log("Max", maxGanjil);
console.log("Total", totalGanjil);
console.log("Total", rataGanjil);

console.log("Hasil Banding: ", hasilBanding);
