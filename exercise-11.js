function balikKata(kata) {
  // you can only write your code here!
	for(var i=0 ; i<=kata.length ; i++){
		tampung = ""
		for (var j=kata.length-1;j>=0 ;j--){
			tampung += kata[j]
		}
	}
    return tampung
} 

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS