// Assignment code here
const specialCharactersString = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digitsString = "1234567890";
const lowerCaseChars = lowerCaseString.split('');
const upperCaseChars = upperCaseString.split('');
const specialChars = specialCharactersString.split('');
const digitChars = digitsString.split('');
// console.log(specialChars);
// console.log(lowerCaseChars);
// console.log(upperCaseChars);
// console.log(digitChars);
var generatePassword = function(){
  // console.log('hello');
  characterPool = [];
  characterPool = characterPool.concat(specialChars);
  characterPool = characterPool.concat(lowerCaseChars);
  characterPool = characterPool.concat(upperCaseChars);
  characterPool = characterPool.concat(digitChars);



  console.log(characterPool);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generatePassword()