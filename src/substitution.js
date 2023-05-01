// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {

    // return false if alphabet is not 26 lettersn, or if it contains non-unique characters
    if (!alphabet || alphabet.length !== 26) return false;
    if (alphabet.length !== new Set(alphabet).size) return false;
 
    const standardAlpha = "abcdefghijklmnopqrstuvwxyz";
    const encodeGrid = {};
    const decodeGrid = {};
    let cipherArray = '';

    // create encode object, and decode object 
  for (i=0; i < standardAlpha.length; i++){
    encodeGrid[standardAlpha[i]] = alphabet[i];
    decodeGrid[alphabet[i]] = standardAlpha[i];
  }

    //create an encoding string if we're encoding
  if (encode){
  for (letter of input){
      (letter >= 'a' && letter <= 'z') 
        ? cipherArray += encodeGrid[letter] 
        : cipherArray += letter; 
  }}

    //create an decoding string if we're decoding
   if (!encode){
     for (letter of input){
     (letter === ' ') ? cipherArray += letter : cipherArray += decodeGrid[letter];
   }}
    
   return cipherArray;           
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
