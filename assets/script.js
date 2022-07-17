// Assignment code here

// generate password function
var generatePassword = function() {
  // multiple prompts that ask if user wants certain criteria for password

  // conditional statements for each prompt
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
