// Assignment Code
let generateBtn = document.querySelector("#generate");


  // password variables -  uppercase, lowercase, numerical and special characters
  let upperCase  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let inclNumeric = [0,1,2,3,0,4,5,6,7,8,9];
  //info from OWASP Foundation
  let inclSpecial = ["!", "\s", "#", "$", "%", "&", "/'", "(", ")", "*", "+", ",", "-", ".", "/:", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  

//create for loop to choose password characters if upperCase, lowerCase, inclNumeric, inclSpecial are chosen
// for (let i = 0; i <= pwLength; i++){
//   let password = upperCase.concat(lowerCase, inclNumeric, inclSpecial);
// }

// //create for loop to choose password characters if upperCase, lowerCase, and inclNumeric 
// for (let i = 0; i <= pwLength; i++){
//   let password = upperCase.concat(lowerCase, inclNumeric);
// }

// //create for loop to choose password characters if upperCase and lowerCase are chosen
// for (let i = 0; i <= pwLength; i++){
//  let password = upperCase.concat(lowerCase);
// }

// //create for loop to choose password characters if upperCase is chosen
// for (let i = 0; i <= pwLength; i++){
//   let password = upperCase;
//  } 

//generate password function
function generatePassword () {
  //set password length 8 - 128 characters
  let pwLength = prompt("Choose a password length of at least 8 characters, but not more than 128");
  if (pwLength === null || pwLength)("Please enter desired character length for generated password");{
    txt = "user cancelled the prompt.";
    } if (pwLength => 8|| pwLength)("Please enter desired character length of at least 8 characters");{
    txt = "user enter numb less than 8.";
     } if (pwLength => 128|| pwLength)("Please enter desired character length of a maximum of 128 characters");{
    txt = "user enter numb greater than 128.";
  }
    // } if else document.getElementbyID("pwLength").innerHTML = "Your password will be" + pwLength + "characters long.";

  //confirm if user wants lowercase characters
  let lowerCase = confirm("Use lowercase characters?");
  if (lowerCase === null || lowerCase("Lowercase characters won't be used");{
    txt = "user declined lowerCase";
  }

  //confirm if user wants uppercase characters
  let upperCase = confirm("Use uppercase characters?");
  if (upperCase === null || upperCase("Uppercase characters won't be used");{
    txt = "user declined lowerCase";
  }


 //confirm if user wants numeric characters
 let inclNumeric = confirm("Use numeric characters?");
 if (inclNumeric === null || inclNumeric("Numeric characters won't be used");{
   txt = "user declined inclNumeric";
 }



//confirm if user wants special characters
let inclSpecial = confirm("Use special characters?");
if (inclSpecial === null || inclSpecial("Special characters won't be used");{
  txt = "user declined inclSpecial";
}





// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
