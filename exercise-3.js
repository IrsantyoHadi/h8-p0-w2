var nama = 'Irsan';
var job = 'jago';
var peran = job.toLowerCase();

if (nama === '') {
  console.log('Nama harus diisi!!'); 
}
else {
if (peran === ''){
  console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game!') 
}
if (nama !='' && (peran == 'ksatria' || peran == 'ksatria')){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' '+ nama + ', kamu dapat menyerang dengan senjatamu!')
}
if (nama !='' && (peran == 'tabib' || peran == 'tabib')){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' '+ nama + ', kamu akan membantu temanmu yang terluka')
}
if (nama !='' && (peran == 'penyihir')){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo ' + peran + ' '+ nama + ', ciptakan keajaiban yang membantu kemenanganmu!')}

  if (peran != 'penyihir' && peran != 'ksatria' && peran != 'tabib' && peran!= 'tabib' && peran != 'ksatria' && peran!= 'penyihir' && peran!=''){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Sayang sekali peran yang kamu inginkan tidak tersedia, harap memilih antara : ksatria, penyihir, atau tabib')}
}