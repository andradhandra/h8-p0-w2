//Tugas 11

function balikKata(kata) {
    // you can only write your code here!
    var panjang = kata.length;
    var atak = "";
    for (s = panjang; s >= 0; s--) {
        atak += kata.charAt(s);
    } return atak;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS