// Assignment code here
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "&", "%", "'", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_", "~", "`", "{", "|", "}", "."];


// generate password function
var generatePassword = function() {
  var available = [];

  var includeUppercase = window.confirm("Would you like to include uppercase characters in your password?");

  if (includeUppercase) {
    available.push(uppercase);
  }

  var includeLowercase = window.confirm("Would you like to include lowercase characters in your password?");

  if (includeLowercase) {
    available.push(lowercase);
  }

  var includeNumbers = window.confirm("Would you like to include numbers in your password?");

  if (includeNumbers) {
    available.push(numbers);
  }

  var includeSpecial = window.confirm("Would you like to include special characters in your password?");

  if (includeSpecial) {
    available.push(special);
  }
};


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
