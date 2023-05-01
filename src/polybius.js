// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    
  const inputArray = input.toLowerCase().split("");
    
    // confirm the number of numbers in the input is an even number
    let numberCount = 0;
    for (char of inputArray){
      if (!isNaN(char) && char !== " "){
        numberCount++;
      }}
    if(!encode && numberCount %2 != 0) return false; 

  let encodedString = '';
  const alphaGrid = {
    a: '11', b: '21', c: '31', d: '41', e: '51',
    f: '12', g: '22', h: '32', i: '42', j: '42', k: '52',
    l: '13', m: '23', n: '33', o: '43', p: '53',
    q: '14', r: '24', s: '34', t: '44', u: '54',
    v: '15', w: '25', x: '35', y: '45', z: '55',
  };
   
    //if encoding, creating encoded string
  if (encode){  
  for (let i=0; i < inputArray.length; i++){
      const char = inputArray[i];
      if (char >= 'a' && char <= 'z') {
      encodedString += alphaGrid[char];
      } else encodedString += char;
  }
  }
    
    //if decoding, decode string 
  if (!encode){
    for (i=0; i<inputArray.length; i+=2){
      //account for spaces, and shift iteration if we hit a space
      if (inputArray[i] === ' ') {
        encodedString += inputArray[i]; 
        i-=1; 
      }
      //iterate through the input but skipping every second number 
      else {
      const gridValue = inputArray[i] + inputArray[i+1];
      for (key in alphaGrid){
          if (alphaGrid[key] === gridValue){
            encodedString += key;
          }
          }
    }}
  }

    return encodedString;
    }
          
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
