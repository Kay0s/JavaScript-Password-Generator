// Assignment Code
let generateBtn = document.querySelector("#generate");

  //set password length 8 - 128 characters
  let pwLength = document.getElementById("prompt").value;

  // password variables -  uppercase, lowercase, numerical and special characters
  let upperCase  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let inclNumeric = [0,1,2,3,0,4,5,6,7,8,9];
  //info from OWASP Foundation
  let inclSpecial = ["!", "\s", "#", "$", "%", "&", "/'", "(", ")", "*", "+", ",", "-", ".", "/:", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  

//create for loop to choose password characters if upperCase, lowerCase, inclNumeric, inclSpecial are chosen
for (let i = 0; i <= pwLength; i++){
  let password = upperCase.concat(lowerCase, inclNumeric, inclSpecial);
}

//create for loop to choose password characters if upperCase, lowerCase, and inclNumeric 
for (let i = 0; i <= pwLength; i++){
  let password = upperCase.concat(lowerCase, inclNumeric);
}

//create for loop to choose password characters if upperCase and lowerCase are chosen
for (let i = 0; i <= pwLength; i++){
 let password = upperCase.concat(lowerCase);
}

//create for loop to choose password characters if upperCase is chosen
for (let i = 0; i <= pwLength; i++){
  let password = upperCase;
 }

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
