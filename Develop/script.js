// Assignment code here
// Characters to be used in password
var char = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "1234567890",
  specChar: "!@#$%^&*()"
}

// User chooses what characters they want in password
let criteria = function() {

  let chosenChar = "";
  let promptLower = confirm('Do you want lowercase letters in your password?');
  let promptUpper = confirm('Do you want uppercase letters in your password?');
  let promptNum = confirm('Do you want numbers in your password?');
  let promptSpec = confirm('Do you want special characters in your password?');

  //  If all answers === false, repeat function
  if(promptLower === false && promptUpper === false && promptNum === false && promptSec === false){
    alert("Please select at least one type of character");
    criteria();
  }

  if(promptLower === true){
    chosenChar = chosenChar + char.lowerCase;
  }

  if(promptUpper === true){
    chosenChar = chosenChar + char.upperCase;
  }

  if(promptNum === true){
    chosenChar = chosenChar + char.num;
  }

  if(promptSpec === true){
    chosenChar = chosenChar + char.specChar;
  }

  return chosenChar;
};

// Prompt for the length of the password
let passLength = function(){
  let promptLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128");
  promptLength = parseInt(promptLength);

  //removes all NaN's and decimals. Focus on integers between selected range
  if(isNaN(promptLength) || Number.isInteger(promptLength) === false || promptLength < 8 || promptLength > 128){
    alert("Please enter a number between 8 and 128");
    passLength();
  }else{
    return promptLength;
  }
}




// Generates password using criteria selected
function generatePassword(){
  let num = passLength();
  let pass = "";
  let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;

  for(i = 1; i <= num; i++){
    debugger;
    let char = Math.floor(Math.random() * str.length +1);

    pass += str.charAt(char);
  }
return pass;
}
// WHEN prompted for character types to include in the password: choose lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected
// THEN a password is generated that matches the selected criteria after prompts are answered
// XXGenerate password display in an alert or written to the page

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
