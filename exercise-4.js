var tanggal = 23;
var bulan = 5;
var tahun = 2018;

if (tanggal <= 31 && tanggal > 0){
  tanggal1 = tanggal;
}
else{
  tanggal1= 'error';
}

switch (bulan){
  case 1 : bulan1 =('Januari'); break;  
  case 2 : bulan1 =('Februari'); break;
  case 3 : bulan1 =('Maret'); break;
  case 4 : bulan1 =('April'); break;
  case 5 : bulan1 =('Mei'); break;
  case 6 : bulan1 =('Juni'); break;
  case 7 : bulan1 =('Juli'); break;
  case 8 : bulan1 =('Agustus'); break;
  case 9 : bulan1 =('September'); break;
  case 10: bulan1 =('Oktober'); break;
  case 11: bulan1 =('November'); break;
  case 12: bulan1 =('Desember'); break;
  default : bulan1 = ('error');
}

if (tahun <= 2200 && tahun >= 1900){
  tahun1 =tahun ;
}
else {
  tahun1='error';
}

console.log (tanggal1 + ' '+ bulan1+ ' '+ tahun1)