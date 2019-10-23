console.log("Problem 1: Menyusun Barisan Bintang")
var rows1; 
rows1 = 10;// input the number of rows

// do loops to display asterisks in the console.

for (a= 0; a<rows1; a ++) {
    console.log ("*");
}
console.log ();

console.log("Problem 2: Menyusun Barisan Bintang Dengan Nested Looping")
var rows2; 
rows2= 10; // input the number of rows

// do loops to display asterisks in the console.
for (x= 0; x< rows2; x++) {
    var bintang= "";
    for (y= 0; y< rows2; y++) {
        bintang = bintang + "*"
    } console.log (bintang);
} 
console.log();

console.log("Problem 3: Menyusun Barisan Tangga Bintang Dengan Nested Looping")
var rows3; 
rows3 = 10;// input the number of rows

// do loops to display asterisks in the console.

var star="";
for (i= 0; i < rows3; i++) {
    for (j = i; j <= i; j++) {
        star = star + "*"
    } console.log(star);
}