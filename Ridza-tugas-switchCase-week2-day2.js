//APLIKASI NAMA BULAN AUTOMATIS
//Masukkan tanggal, bulan, dan tahun dalam angka!

// assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var tanggal = 22;

// assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var bulan = 6; 

// assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var tahun = 1991;

if (tanggal < 31 && bulan !=2) {
    switch (bulan) {;
        case 1: bulan = 'Januari';
        case 2: bulan = 'Pebruari'
        case 3: bulan = 'Maret';
        case 4: bulan = 'April';
        case 5: bulan = 'Mei';
        case 6: bulan = 'Juni';
        case 7: bulan = 'Juli';
        case 8: bulan = 'Agustus';
        case 9: bulan = 'September';
        case 10: bulan = 'Oktober';
        case 11: bulan = 'November';
        case 12: bulan = 'Desember';
    }
}