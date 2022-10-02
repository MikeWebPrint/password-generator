// Assignment code here
// initialize possible characters as available arrays
const specialCharactersString = "!\"#$%&'()*+-/=?@[]^_`{|}~";
const lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
const upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const digitsString = "1234567890";
const lowerCaseChars = lowerCaseString.split('');
const upperCaseChars = upperCaseString.split('');
const specialChars = specialCharactersString.split('');
const digitChars = digitsString.split('');
// console.log(lowerCaseChars, upperCaseChars, specialChars, digitChars);

var generatePassword = function(){
  // initialize array of password characters the user wants
  let characterPool = [];
  // characterPool = characterPool.concat(specialChars);
  // characterPool = characterPool.concat(lowerCaseChars);
  // characterPool = characterPool.concat(upperCaseChars);
  // characterPool = characterPool.concat(digitChars);
  // console.log(characterPool);

  if (confirm('Would you like to generate a password?')) {
      passwordLength = prompt('How many characters?'); 
      // check that the input is a number
      if (isNaN(passwordLength)) {
        alert('You must enter a number. Start again');
        return null;
        } else {
          // check that the length is within bounds
          if ((passwordLength > 128) || (passwordLength < 8)) {
            alert('Password must be between 8 and 128 characters long.');
          } else {
            // user confirms the types of characters to include
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
            // if user selects no character types, no password will be generated
            if (characterPool[0] === undefined) {
              alert('You must choose at least one character type. Start again.');
              return null;
              }
            }
            // initialize the password array
            let securePassword = [];
            // add items to the securePassword array, as many items as the user-defined length, randomly from the character Pool
            for (let i=0; i < passwordLength; i++) {
              securePassword.push(characterPool[Math.floor(Math.random() * characterPool.length)]);
            }
            // console.log(securePassword);
            // turn the securePassword array into a string
            return securePassword.join("");
          }
        } return null //if user declines to generate password
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var clearBtn = document.querySelector("clear");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  var password = generatePassword();
  passwordText.value = `Here is your password: \n\n` + password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// generateBtn.textContent = 'Clear Password';
// generateBtn.id ="clear";
// let clearPassword = function() {
//   var passwordText = document.querySelector("#password");
//   passwordText.value = "";
//   clearBtn.id = "generate";
//   clearBtn.textContent = "Generate Password";
// }

// clearBtn.addEventListener("click", clearPassword);
