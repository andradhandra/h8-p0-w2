//Tugas 13

function xo(str) {
    // you can only write your code here!
    var pnjng = str.length;
    var xcount = 0;
    var ocount = 0;
    var cek = "";
    for (x = 0; x <= pnjng; x++) {
        cek = str[x];
        if (cek === 'x') {
            xcount ++;
        } else if (cek === 'o'){
            ocount ++;
        }
    }
    return xcount == ocount;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true