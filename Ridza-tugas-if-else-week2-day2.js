//SELAMAT DATANG DI DUNIA PROXYTIA!!! SILAHKAN MENGISI NAMA ANDA DAN PERAN ANDA!
/*
Silahkan ketik peran yang anda inginkan: 
1. ksatria
2. tabib
3. penyihir
*/

var nama = 'Ridza';
var peran = 'penyihir'

if (nama === '' && peran === '') {
  console.log('harap mengisi nama dan peran Anda!');
} else if (nama === ''){
  console.log('harap mengisi nama Anda!');
} else if (peran === '') {
  console.log(`Halo ${nama}! Pilih peranmu untuk memulai permainan!`);
} else if (nama != '' && peran === 'ksatria') {
  console.log(`Selamat datang di DUNIA PROXYTIA, ${nama}!`);
  console.log(`${peran} ${nama}! Kamu dapat menyerang dengan pedang mu!`);
} 
else if (nama != '' && peran === 'tabib') {
  console.log(`Selamat datang di DUNIA PROXYTIA, ${nama}!`);
  console.log(`${peran} ${nama}! Kamu dapat menyembuhkan temanmu yang terluka!`);
} 
else if (nama != '' && peran === 'penyihir') {
  console.log(`Selamat datang di DUNIA PROXYTIA, ${nama}!`);
  console.log(`${peran} ${nama}! Kamu dapat membaca mantra untuk menyerang musuhmu!`);
} else {
  console.log(`Maaf ${nama}! Kamu tidak dapat menjadi ${peran}!`);
  console.log('Silahkan pilih peran yang tersedia!');
}


