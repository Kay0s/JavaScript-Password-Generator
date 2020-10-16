// Assignment Code
let generateBtn = document.querySelector("#generate");
 
//generate password function
// function generatePassword () {
  //set password length 8 - 128 characters
  let pwLength = prompt("Choose a password length of at least 8 characters, but not more than 128");
  if (pwLength === null){
    alert("Please enter desired character length for generated password");
    } else if (pwLength < 8){
      alert("Please enter desired character length of at least 8 characters");
     } else if (pwLength > 128){
     alert("Please enter desired character length of a maximum of 128 characters");
     }else if (isNaN){
     prompt("Please enter a number from 8 to 128 for desired character length");
     }
 

let choiceArray = [];

  //confirm if user wants lowercase characters
  let lowerCaseConfirm = confirm("Use lowercase characters?");
  if (lowerCaseConfirm) {
  choiceArray.push("lowerCaseChosen");
  }
  //confirm if user wants uppercase characters
  let upperCaseConfirm = confirm("Use uppercase characters?");
  if (upperCaseConfirm) {
    choiceArray.push("upperCaseChosen");
    }


 //confirm if user wants numeric characters
 let inclNumericConfirm = confirm("Use numeric characters?");
 if (inclNumericConfirm) {
  choiceArray.push("inclNumericChosen");
  }


//confirm if user wants special characters
let inclSpecialConfirm = confirm("Use special characters?");
if (inclSpecialConfirm) {
  choiceArray.push("inclSpecialChosen");
  }

// generate password
function generatePassword() {
  let password = "";

  let option = choiceArray[Math.floor(Math.random()*choiceArray.length)];
  if (option === "lowerCaseChosen"){
  password += lowerCaseArray[Math.floor(Math.random()*26)];
  } if (option === "upperCaseChosen"){
    password += upperCaseArray[Math.floor(Math.random()*26)];
  }
}

// for x=0 if x less than pwLength x++

//return password in generate password

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


 // password variables -  uppercase, lowercase, numerical and special characters
 let upperCaseArray  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let inclNumericArray = [0,1,2,3,0,4,5,6,7,8,9];
 //info from OWASP Foundation
 let inclSpecialArray = ["!", "\s", "#", "$", "%", "&", "/'", "(", ")", "*", "+", ",", "-", ".", "/:", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
 

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


