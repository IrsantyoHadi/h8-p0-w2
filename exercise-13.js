function xo(str) {
    var lengthStr = str.length;
    var splitStr = str.split('');
    var jumlahX = 0;
    var jumlahO = 0;
  
    for (i=0;i<=lengthStr;i++){
  
      if (splitStr[i] === 'x'){
        jumlahX = jumlahX + 1;
      }
      if (splitStr[i] === 'o'){
        jumlahO = jumlahO +1;
      }
    
    }
    if (jumlahX === jumlahO){
      return true
    }
    else{
      return false
    }
  
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true