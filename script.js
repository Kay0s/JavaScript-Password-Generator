// returns the "#generate" button
let generateBtn = document.querySelector("#generate");

// Add event listener to generate button - attaches an event handler to "#generate" button
generateBtn.addEventListener("click", writePassword);

// generate password function with open string for password to pass through
function generatePassword() {
  password = "";

  //set password length 8 - 128 characters
  //prompt box appears instructing user to key in password length, and that value is stored as "pwLength"
  let pwLength = prompt("Choose a password length of at least 8 characters, but not more than 128");
   //prompt box appears instructing user to key in password length if a number is lower than 8 or higher than 129
     if (pwLength <= 7 || pwLength >= 129){
     prompt("A number lower than 8 or higher than 128 was entered.  Please choose a password length of at least 8 characters, but not more than 128");
  //prompt box appears instructing user to key in password length if isNan or not a number is entered
    }while (isNaN(pwLength)){
     prompt("Please enter a number from 8 to 128 for desired character length");
     } 
  
  //defining user's choices as an empty array to be filled be subsequent choices from confirm boxes
    let choiceArray = [];

  //confirm if user wants lowercase characters
  let lowerCaseConfirm = confirm("Use lowercase characters?");
  //if user chooses lowercase this info is pushed into the subsequent choiceArray to randomize and generate password
  if (lowerCaseConfirm) {
  choiceArray.push("lowerCaseChosen");
  }
  //confirm if user wants uppercase characters
  let upperCaseConfirm = confirm("Use uppercase characters?");
  //if user chooses uppercase this info is pushed into the subsequent choiceArray to randomize and generate password
  if (upperCaseConfirm) {
    choiceArray.push("upperCaseChosen");
    }
 //confirm if user wants numeric characters
 let inclNumericConfirm = confirm("Use numeric characters?");
 //if user chooses numeric value this info is pushed into the subsequent choiceArray to randomize and generate password
 if (inclNumericConfirm) {
  choiceArray.push("inclNumericChosen");
  }
//confirm if user wants special characters
let inclSpecialConfirm = confirm("Use special characters?");
//if user chooses to include special characters this info is pushed into the subsequent choiceArray to randomize and generate password
if (inclSpecialConfirm) {
  choiceArray.push("inclSpecialChosen");}
//if user chooses doesn't choose any parameters an alert box appears to prompt the user to press the Generate Password button to restart process
if (choiceArray.length === 0){
    alert("At least one parameter must be chosen.  Please press the Generate Password button to restart.");}
else{

// password choices for arrays defined uppercase, lowercase, numerical and special characters 
 let upperCaseArray  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 let lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l","m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 let inclNumericArray = [0,1,2,3,0,4,5,6,7,8,9];
 //info from OWASP Foundation - with escaping from MDN
 let inclSpecialArray = ["!", "\s", "#", "$", "%", "&", "/'", "(", ")", "*", "+", ",", "-", ".", "/:", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
 
  //for loop for the length of PwLength - length of password to ensure password created equals length of password
  for (let i=0; i < pwLength; i++){
    //assign option to be equal to the choiceArray and randomized by and rounded down by Math.floor and Math.random times the length of the ChoiceArray
    let option = choiceArray[Math.floor(Math.random()*choiceArray.length)];
     //if lowerCaseChosen, password is equal to password plus the lowerCaseArray randomized by and rounded down by Math.floor and Math.random times 26 (characters in alaphabet)
    if (option === "lowerCaseChosen"){
    password += lowerCaseArray[Math.floor(Math.random()*26)];
  //if upperCaseChosen, password is equal to password plus the upperCaseArray randomized by and rounded down by Math.floor and Math.random times 26 (characters in alaphabet)  
  } if (option === "upperCaseChosen"){
    password += upperCaseArray[Math.floor(Math.random()*26)];
  //if inclNumericChosen, password is equal to password plus the inclNumericArray randomized by and rounded down by Math.floor and Math.random times 11 (numeric characters) 
  }if (option === "inclNumericChosen"){
      password += inclNumericArray[Math.floor(Math.random()*11)];
    }if (option === "inclSpecialChosen"){
  //if inclSpecialChosen, password is equal to password plus the inclSpecialArray randomized by and rounded down by Math.floor and Math.random times 31 (special characters in alaphabet)  
    password += inclSpecialArray[Math.floor(Math.random()*31)];
    } 
  }
//console.log password to the console and return password to get password from the for loop
console.log(password);
return password;
};
}
// function to display password
function writePassword() {
  console.log("button pressed - firing write password");
  let password = generatePassword();
  // Write password to the #password input
  let passwordText = document.querySelector("#password");
  //changes innerText to password element
  document.getElementById("password").innerHTML = password;
  passwordText.innerText = password;
}
