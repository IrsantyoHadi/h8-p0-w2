//Nomer1..........................................

var rows1=5; // input the number of rows
var star= '*'
for(i=0 ; i < rows1 ;i++){
  console.log (star)
}
// do loops to display asterisks in the console.

//Nomer2............................................

var rows2 = 5; // input the number of rows
var star ='*';
var blank='';

for(i=0; i< rows2; i++){
  blank = ''
  for(j=0;j< rows2; j++){
    blank = blank + star
  }
  console.log(blank)
}
// do loops to display asterisks in the console.

//Nomer3................................................

//Cara1............................................

var blank = '';
var star = '*';
// do loops to display asterisks in the console.
for(i=0;i<rows3;i++){
  blank = blank + '*'
  console.log (blank)
}

//Cara2.....................................................

var star = '*';
var blank = '';
var tangga = ''

for (i=0 ; i < rows3 ; i++){
   tangga = tangga + star
  for (j=0 ; j < rows3 ; j++){
     tangga = tangga + blank
  }
  console.log(tangga)
}