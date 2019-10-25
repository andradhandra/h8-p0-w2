//Tugas 12

function konversiMenit(menit) {
    // you can only write your code here!
    var menit2;
    if (menit%60 < 10) {
        menit2 = `0${menit % 60}`;
    } else {
        menit2 = menit % 60;
    }
    var jam = `${Math.trunc (menit/60)}:${menit2}`;
    return jam;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00