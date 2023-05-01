// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    
    // return false if shift is outside aboslute value 25
    if (shift <-25 || shift === 0 || shift >25) return false; 
    
    // adjust shift to the left/right for decoding
    if (!encode){shift *= -1};

    //map the shift using charValues and return the encoded string 
    let encodedArray = input.toLowerCase().split("").map(character => {
      if (character >= 'a' && character <= 'z'){      //sort out spaces and punctuation
        let charValue = character.charCodeAt(0) + shift;
        charValue > 122 ? charValue -= 26 : charValue; //wrap back to 'a' if beyond 'z'
        charValue < 97 ? charValue += 26 : charValue;
        character = String.fromCharCode(charValue);
      }
        return character;
    })
      return encodedArray.join("");
  }
  
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
