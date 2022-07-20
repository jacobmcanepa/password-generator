// Assignment code here
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var special = "!#$&%;()'*+-/:<>=?@^_`{|}.~"
var available = [];

var generatePassword = function() {
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

  finalPassword = randomize(characterAmount());
  return finalPassword;

};

var characterAmount = function() {
  var value = prompt("How many characters would you like you password to be? Min: 8 Max: 128");
  
  if (parseInt(value) < 8) {
    alert("Your password must be more than 8 characters.");
    return characterAmount();
  }

  if (parseInt(value) > 128) {
    alert("Your password must be less than 128 characters.");
    return characterAmount();
  }

  else {
    return parseInt(value);
  }
};

var shuffle = function(string) {
  var arr = string.split('');

  arr.sort(function() {
    return 0.5 - Math.random();
  });

  string = arr.join('');
  return string;
}

var randomize = function(length) {
  passwordOptions = []
  password = ""
  for (var i = 0; i < length; i++) {
    passwordOptions.push(available[i % available.length]);
  }

  for (var i = 0; i < passwordOptions.length; i++) {
    var index = Math.floor(Math.random() * passwordOptions[i].length);
    password += passwordOptions[i][index];
  }

  available.length = 0
  return shuffle(password);
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
