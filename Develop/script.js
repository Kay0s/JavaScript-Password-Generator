// Assignment Code
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// generate password

function generatePassword() {
  password = "";

  //set password length 8 - 128 characters
  let pwLength = prompt("Choose a password length of at least 8 characters, but not more than 128");
     if (pwLength <= 7 || pwLength >= 129){
     prompt("A number lower than 8 or higher than 128 was entered.  Please choose a password length of at least 8 characters, but not more than 128");
     }while (isNaN(pwLength)){
     prompt("Please enter a number from 8 to 128 for desired character length");
     } 
  
    let choiceArray = [];

  //confirm if user wants lowercase characters
  // if (lowerCaseConfirm + upperCaseconfirm + inclSpecialConfirm + inclNumericConfirm === false){


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
  choiceArray.push("inclSpecialChosen");}
  
if (choiceArray.length === 0){
    alert("A parameter must be chosen.  Please press the Generate Password button to restart.");}
else{


// password choices -  uppercase, lowercase, numerical and special characters
 let upperCaseArray  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let inclNumericArray = [0,1,2,3,0,4,5,6,7,8,9];
 //info from OWASP Foundation
 let inclSpecialArray = ["!", "\s", "#", "$", "%", "&", "/'", "(", ")", "*", "+", ",", "-", ".", "/:", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
 
let newVariable = pwLength * 1

  for (let i=0; i < pwLength; i++){
    let option = choiceArray[Math.floor(Math.random()*choiceArray.length)];
    if (option === "lowerCaseChosen"){
    password += lowerCaseArray[Math.floor(Math.random()*26)];
    } if (option === "upperCaseChosen"){
    password += upperCaseArray[Math.floor(Math.random()*26)];
    }if (option === "inclNumericChosen"){
      password += inclNumericArray[Math.floor(Math.random()*11)];
    }if (option === "inclSpecialChosen"){
    password += inclSpecialArray[Math.floor(Math.random()*31)];
    } 
    
  }

// password = lowerCaseArray[i].concat(upperCaseArray[i], inclNumericArray[i], inclSpecialArray[i]);
console.log(password);
return password;
};
}
// Write password to the #password input
function writePassword() {
  console.log("button pressed - firing write password");
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  document.getElementById("password").innerHTML = password;
  passwordText.innerText = password;

}
