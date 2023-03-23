// Membuat array dengan 100 nilai random antara 1 dan 50
let randomArray = [];
for (let i = 0; i < 100; i++) {
  randomArray.push(Math.floor(Math.random() * 50) + 1);
}
console.log(randomArray);

// Membuat array baru untuk nilai pada index genap
let evenIndexArray = [];
for (let i = 2; i < randomArray.length; i += 2) {
  evenIndexArray.push(randomArray[i]);
}
console.log(evenIndexArray);

// Membuat array baru untuk nilai pada index ganjil
let oddIndexArray = [];
for (let i = 1; i < randomArray.length; i += 2) {
  oddIndexArray.push(randomArray[i]);
}
console.log(oddIndexArray);

// Menghitung nilai statistik dari array pada index genap
let evenMin = Math.min(...evenIndexArray);
let evenMax = Math.max(...evenIndexArray);
let evenTotal = evenIndexArray.reduce((total, num) => total + num, 0);
let evenAverage = evenTotal / evenIndexArray.length;

// Menghitung nilai statistik dari array pada index ganjil
let oddMin = Math.min(...oddIndexArray);
let oddMax = Math.max(...oddIndexArray);
let oddTotal = oddIndexArray.reduce((total, num) => total + num, 0);
let oddAverage = oddTotal / oddIndexArray.length;

// Mencetak hasil perhitungan nilai statistik dari kedua array
console.log("Array pada index genap:");
console.log(`Min: ${evenMin}`);
console.log(`Max: ${evenMax}`);
console.log(`Total: ${evenTotal}`);
console.log(`Rata-rata: ${evenAverage}`);

console.log("\nArray pada index ganjil:");
console.log(`Min: ${oddMin}`);
console.log(`Max: ${oddMax}`);
console.log(`Total: ${oddTotal}`);
console.log(`Rata-rata: ${oddAverage}`);

// Membandingkan nilai statistik dari kedua array
let minComparison =
  evenMin > oddMin ? "lebih besar array genap" : "lebih besar array ganjil";
let maxComparison =
  oddMax > evenMin ? "lebih besar array genap" : "lebih besar array ganjil";
let totalComparison =
  evenTotal === oddTotal
    ? "memiliki nilai sama antara array genap dan ganjil"
    : "tidak memiliki nilai sama antara array genap dan ganjil";
let averageComparison =
  evenAverage > oddAverage
    ? "lebih besar array genap"
    : "lebih besar array ganjil";

console.log(`\nPerbandingan nilai statistik dari kedua array:`);
console.log(`Min ${minComparison}`);
console.log(`Max ${maxComparison}`);
console.log(`Total ${totalComparison}`);
console.log(`Rata-rata ${averageComparison}`);
