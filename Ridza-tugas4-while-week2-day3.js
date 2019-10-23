//1. Melakukan Looping Menggunakan While
console.log("Problem 1");

console.log("LOOPING PERTAMA");
var loop = 0
while (loop < 20) {
    loop += 2;
    console.log(loop + " - I love coding");
   
} console.log();

console.log("LOOPING KEDUA");
while (loop > 0) {
    console.log (loop + " - I will become fullstack developer");
    loop -=2;
}

console.log();

//2. Melakukan Looping Menggunakan For
console.log("Problem  2");

console.log("LOOPING PERTAMA");
var iterasi= 1
for (iterasi = 1; iterasi <= 20; iterasi++) {
    console.log (iterasi + " - I love coding");
}console.log();

console.log("LOOPING KEDUA");
for (iterasi = 20; iterasi > 0; iterasi--) {
    console.log (iterasi + " - I will become fullstack developer");
}

console.log();

//3. Angka Ganjil dan Genap
console.log("Problem 3")

//ganjil - genap
console.log("Counter ganjil - genap");
for (w=1; w <= 100; w++) {
    if (w % 2 == 0) {
        console.log("GENAP");
    } else {
        console.log ("GANJIL");
    }
} console.log();

//pertambahan counter 2
console.log("Pertambahan counter 2");
for (x = 1; x <= 100; x += 2) {
    if (x % 3 == 0) {
        console.log(x + " KELIPATAN 3")
    } else {
        console.log("");
    }
} console.log();

//pertambahan counter 5
console.log("Pertambahan counter 5");
for (y = 1; y <= 100; y += 5) {
    if (y % 6 == 0) {
        console.log(y + " KELIPATAN 6")
    } else {
        console.log("");
    }
} console.log();

//pertambahan counter 9
console.log("Pertambahan counter 9");
for (z = 1; z <= 100; z+= 9) {
    if (z % 10 == 0) {
        console.log(z + " KELIPATAN 10")
    } else {
        console.log("");
    }
} console.log();