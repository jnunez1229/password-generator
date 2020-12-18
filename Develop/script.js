// Assignment code here

// Click the button to generate a password
// Present series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
function generate(){
  let pass = "";
  let str = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$`;

  for(i = 1; i <= 8; i++){
    let char = Math.floor(Math.random() * str.length +1);

    pass += str.charAt(char);
  }
return pass;
}
// WHEN prompted for character types to include in the password: choose lowercase, uppercase, numeric, and/or special characters
// Input should be validated and at least one character type should be selected
// THEN a password is generated that matches the selected criteria after prompts are answered
// Generate password display in an alert or written to the page

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
