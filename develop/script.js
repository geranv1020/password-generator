// Constants 
const upperCaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseStr = "abcdefghijklmnopqrstuvwxyz";
const numberStr = "0123456789";
const specialCharactersStr = "!@#$%^&*()=<>,.";

// Assignment code here

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

function generatePassword() {
    var promptPassLength = window.prompt('Your password needs to be between 8 and 128 characters. Write the number of characters you desire for your password.');
}
var upperCasePassword = window.prompt('Do you want your password to contain any upercase letters? Enter "yes" or "no".');

var lowerCasePassword = window.prompt('Do you want your password to contain any lowercase letters? Enter "yes" or "no".');

var numberPassword = window.prompt('Do you want your password to contain any numbers?');

var symbolsPassword = window.prompt('Do you want your password to contain any symbols? Enter "yes" or "no".');


for (var i = 0; i <= passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, random +1);
}
