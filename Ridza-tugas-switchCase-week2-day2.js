
//APLIKASI NAMA PENANGGALAN AUTOMATIS
//Catatan: untuk menyederhanakan penulisan, bulan pebruari akan dianggap mempunyai 30 hari

//Masukkan tanggal, bulan, dan tahun dalam angka!

// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tanggal = 31;


// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulan = 10; 


// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tahun = 2201;

//Memproses penanggalan
if (tahun < 1900 || tahun > 2200) {
  console.log('Penanggalan yang Anda masukan tidak valid!');
} else if (tanggal < 31) {
    switch (bulan) {
        case 1: bulan = 'Januari'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 2: bulan = 'Pebruari'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 3: bulan = 'Maret'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 4: bulan = 'April'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 5: bulan = 'Mei'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 6: bulan = 'Juni'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 7: bulan = 'Juli'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 8: bulan = 'Agustus'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 9: bulan = 'September'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 10: bulan = 'Oktober'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 11: bulan = 'November'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        case 12: bulan = 'Desember'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
        default: console.log('Penanggalan yang Anda masukan tidak valid!');
    }

} else if (tanggal === 31) {
  switch (bulan) {
    case 1: bulan = 'Januari'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    case 3: bulan = 'Maret'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    case 5: bulan = 'Mei'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    case 7: bulan = 'Juli'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    case 8: bulan = 'Agustus'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    case 10: bulan = 'Oktober'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    case 12: bulan = 'Desember'; console.log(`${tanggal} ${bulan} ${tahun}`); break;
    default: console.log('Penanggalan yang Anda masukan tidak valid!');
  }
} else {console.log('Penanggalan yang Anda masukan tidak valid!');}

 
