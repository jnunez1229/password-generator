// Characters to be used in password
var char = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "1234567890",
  specChar: "!@#$%^&*()-=_+[];':\/.,?><"
}

// User chooses what characters they want to use in password
let criteria = function() {

  let chosenChar = "";

  while(chosenChar === ""){
    // confirm lowercase
    let confirmLower = confirm('Do you want lowercase letters in your password?');
    if(confirmLower === true){
      alert("You have chosen to include lowercase letters in your password");
      chosenChar = chosenChar + char.lowerCase;
    }else{
      alert("You have chosen to NOT include lowercase letters in your password")
    }

    // confirm uppercase
    let confirmUpper = confirm('Do you want uppercase letters in your password?');
    if(confirmUpper === true){
      alert("You have chosen to include uppercase letters in your password");
      chosenChar = chosenChar + char.upperCase;
    }else{
      alert("You have chosen to NOT include uppercase letters in your password")
    }

    // confirm numbers
    let confirmNum = confirm('Do you want numbers in your password?');
    if(confirmNum === true){
      alert("You have chosen to include numbers in your password");
      chosenChar = chosenChar + char.num;
    }else{
      alert("You have chosen to NOT include numbers in your password")
    }

    // confirm special characters
    let confirmSpec = confirm('Do you want special characters in your password?');
    if(confirmSpec === true){
      alert("You have chosen to include special characters in your password");
      chosenChar = chosenChar + char.specChar;
    }else{
      alert("You have chosen to NOT include special characters in your password");
    }

    if(chosenChar === ""){
      alert("Please select at least one type of character");
    }else{
      return chosenChar;
    }
  }
};

// Prompt for the desired length of the password
let passLength = function(){
  let promptLength = prompt("How long do you want your password to be? Please enter a number between 8 and 128");
  promptLength = parseInt(promptLength);

  //removes all NaN's and decimals. Focus on integers between selected range
  if(isNaN(promptLength) || Number.isInteger(promptLength) === false || promptLength < 8 || promptLength > 128){
    alert("Please enter a number between 8 and 128");
    passLength();
  }else{
    alert(`Your password will be ${promptLength} characters long.`)
    return promptLength;
  }
}

// Generates password using criteria selected
function generatePassword(){
  let pass = "";
  let chosenLength = passLength();
  let userCriteria = criteria();

  for(i = 1; i <= chosenLength; i++){
    let char = Math.floor(Math.random() * userCriteria.length +1);
    pass += userCriteria.charAt(char);
  }
return pass;
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
