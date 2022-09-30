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
  // characterPool = characterPool.concat(specialChars);
  // characterPool = characterPool.concat(lowerCaseChars);
  // characterPool = characterPool.concat(upperCaseChars);
  // characterPool = characterPool.concat(digitChars);
  // console.log(characterPool);
  if (confirm('Would you like to generate a password?')) {
      passwordLength = prompt('How many characters?'); 
      if (isNaN(passwordLength)) {
        alert('You must enter a number.');
        return
        } else {
          if ((passwordLength > 128) || (passwordLength < 8)) {
            alert('Password must be between 8 and 128 characters long.');
          } else {
            if (confirm('Would you like to include lowercase letters?')) {
              characterPool = characterPool.concat(lowerCaseChars);
                console.log(characterPool);
            }
            if (confirm('Would you like to include uppercase letters?')) {
              characterPool = characterPool.concat(upperCaseChars);
                console.log(characterPool);
            }
            if (confirm('Would you like to include numbers?')) {
              characterPool = characterPool.concat(digitChars);
                console.log(characterPool);
            }
            if (confirm('Would you like to include special characters?')) {
              characterPool = characterPool.concat(specialChars);
                console.log(characterPool);
              }
            }
            let securePassword = [];
            securePassword.length = passwordLength;
            console.log(securePassword);
            let randomChar = Math.floor(Math.random() * passwordLength);
            console.log(randomChar);
            // Now to assign the randomChar to each index of the securePassword
      }
    }
  }
            // alert('great')

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
// generatePassword()