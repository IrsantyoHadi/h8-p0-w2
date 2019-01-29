//Nomer1...........................................
//Cara1............................................
/*
 BUATLAH KODE FUNCTION DISINI
*/
function shoutOut(){
var kata1 = 'Halo';
var kata2 = 'Function!';
return kata1 +' '+kata2
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

//Cara2..........................................

function shoutOut(kata1,kata2){
    return kata1 +' '+kata2
}
console.log (shoutOut('Halo','Function!'))

//Nomer2...................................................

/*
 BUATLAH KODE FUNCTION DISINI
*/
function calculateMultiply(num1,num2){
    return num1 * num2
  }
  var num1 = 5;
  var num2 = 6;
  
  var hasilPerkalian = calculateMultiply(num1,num2);
  console.log(hasilPerkalian); // Menampilkan angka 30

  //Nomer3................................................

  /*
 BUATLAH KODE FUNCTION DISINI
*/
function processSentence(name,age,address,hobby){
    return ('Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!')
  }
  
  var name = "Agus";
  var age = 30;
  var address = "Jln. Malioboro, Yogjakarta";
  var hobby = "gaming";
  
  var fullSentence = processSentence(name,age,address,hobby);
  console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"