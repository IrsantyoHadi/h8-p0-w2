// ...............Nomer 1......................

var j = 0
console.log ('LOOPING PERTAMA');
while (j<20){
    j += 2;
    console.log(j + ' - '+'I Love Coding ')
}

console.log ('LOOPING KEDUA');
j += 2
while (j>2){
  j -= 2 ;
  console.log(j + ' - ' + 'I will become fullstack developer')
}

//..........................Nomer2.............................

console.log('LOOPING PERTAMA');
for (var i=1 ; i<=20 ; i++){
  console.log(i + ' - ' + 'I love coding')
}

console.log('LOOPING KEDUA');
for (var i=20 ; i > 0 ; i--){
  console.log(i + ' - ' + 'I will become fullstack developer')
}

//..............................Nomer3..........................
// Part1..................................

for (var i=1 ; i<=100; i++){
  if (i%2 == 0){
    console.log("GENAP");
  }
  else {
    console.log ("GANJIL");
  }
}

//Part2............................................

for (var i=1 ; i<=100; i += 2){
  if (i%3 == 0){
    console.log (i + ' KELIPATAN 3');
  }
  else {
    console.log('');
  }
}

//Part3.............................................

for (var i=1 ; i<=100; i += 5){
  if (i%6 == 0){
    console.log (i + ' KELIPATAN 6');
  }
  else {
    console.log('');
  }
}

//Part4.........................................................

for (var i=1 ; i<=100; i += 9){
  if (i%10 == 0){
    console.log (i + ' KELIPATAN 10');
  }
  else {
    console.log('');
  }
}
