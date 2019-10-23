
//APLIKASI NAMA PENANGGALAN AUTOMATIS
//Catatan: untuk menyederhanakan penulisan, bulan pebruari akan dianggap mempunyai 30 hari

//Masukkan tanggal, bulan, dan tahun dalam angka!

// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tanggal = 31;


// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulan = 4; 


// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tahun = 2200;

//Memproses penanggalan
if (tahun < 1900 || tahun > 2200) {
  console.log('Penanggalan yang Anda masukan tidak valid!');
} else if (tanggal < 31) {
    switch (bulan) {
        case 1: bulan = 'Januari'; break;
        case 2: bulan = 'Pebruari'; break;
        case 3: bulan = 'Maret'; break;
        case 4: bulan = 'April'; break;
        case 5: bulan = 'Mei'; break;
        case 6: bulan = 'Juni'; break;
        case 7: bulan = 'Juli';  break;
        case 8: bulan = 'Agustus'; break;
        case 9: bulan = 'September'; break;
        case 10: bulan = 'Oktober'; break;
        case 11: bulan = 'November'; break;
        case 12: bulan = 'Desember'; break;
        default: console.log('Penanggalan yang Anda masukan tidak valid!'); tanggal = ''; bulan = ''; tahun = '';
    } 

} else if (tanggal === 31) {
  switch (bulan) {
    case 1: bulan = 'Januari'; break;
    case 3: bulan = 'Maret'; break;
    case 5: bulan = 'Mei';  break;
    case 7: bulan = 'Juli';  break;
    case 8: bulan = 'Agustus';  break;
    case 10: bulan = 'Oktober';  break;
    case 12: bulan = 'Desember';  break;
    default: console.log('Penanggalan yang Anda masukan tidak valid!'); tanggal = ''; bulan = ''; tahun = '';
  } 
} else {
  tanggal = ''; bulan = ''; tahun = '';
  console.log('Penanggalan yang Anda masukan tidak valid!');
}

console.log(`${tanggal} ${bulan} ${tahun}`);
