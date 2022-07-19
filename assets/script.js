// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = "!#$&%;()'*+-/:<>=?@^_`{|}.~"

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

  var characterAmount = window.prompt("How many characters would you like your password to be? Min: 8 Max: 128")

  var randomize = function(length) {
    for (var i =0; i < length; i++) {
      console.log(available[i%available.length]);
    }
  }

  randomize(parseInt(characterAmount));
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
