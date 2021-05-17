// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y", "z"];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"," L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbersArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharArr = ['!', '"', '#', '$', '%', '&', ',', ')', '*', '+', '"', '"',  '-',  '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];
var passwordInfo = [];
var finalPassword = '';


function writePassword() {
  var passwordLength = prompt('Please choose a password length between 8-128 characters!');
  if(passwordLength >= 8 && passwordLength <= 128) {
      // alert('Password looks good!');
    } else {
      alert('Password must be between 8 and 128 characters!');
      return;
    };
  var passUppercase = confirm('Would you like to include uppercase letters?');
        if(passUppercase) {
          passwordInfo.push(upperCaseArr);
        };
        
  var passLowercase = confirm('Would you like to include lowercase letters?');
      if(passLowercase) {
        passwordInfo.push(lowerCaseArr);
      };
  var passSpecialChar = confirm('Would you like to include symbols?');
        if(passSpecialChar) {
          passwordInfo.push(specialCharArr);
        };
  var passNumbers = confirm('Would you like to include numbers?');
        if(passNumbers) {
          passwordInfo.push(numbersArr);
        };
  
  
  var passwordText = document.querySelector("#password");
  
  var passwordChar = passwordInfo.flat();
  for(let i=0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * passwordChar.length);
    finalPassword += passwordChar[randomIndex]; 
  }
  
  console.log(passwordLength, passUppercase, passLowercase, passSpecialChar, passNumbers);
  
  console.log(passwordInfo);
  
  console.log(finalPassword);
  
  passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

