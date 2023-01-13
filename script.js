// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  //variable created to store a user choice for password length
  let passwordLength = parseInt(
    prompt(
      "How many characters should have your password? Minimum input is 10, maximum is 64."
    )
  );
  //condition below checks if password requirements were met and if not, it prompts a user to choose correctly
  if (
    isNaN(passwordLength) === true ||
    passwordLength < 10 ||
    passwordLength > 64
  ) {
    alert(
      "You must choose a number between 10 and 64 characters. Refresh page."
    );
    return;
  }
  //variables created to store a user choices for the following options: lower case, upper case, numeric character and special character
  //confirm option chosen as it returns only false or true (faster for if statement below)
  let wantLowerCase = confirm(
    "Do you want to have lower cases in your password? OK for yes, cancel for no."
  );
  console.log(wantLowerCase);

  let wantUpperCase = confirm(
    "Do you want to have Upper cases in your password? OK for yes, cancel for no."
  );
  console.log(wantUpperCase);

  let wantNumeric = confirm(
    "Do you want to have numeric characters in your password? OK for yes, cancel for no."
  );
  console.log(wantNumeric);

  let wantSpecial = confirm(
    "Do you want to have special characters in your password? OK for yes, cancel for no."
  );
  console.log(wantSpecial);

  if (
    wantLowerCase == false &&
    wantUpperCase === false &&
    wantNumeric === false &&
    wantSpecial === false
  ) {
    alert("You must choose at least one characteristic of the password.");
  }

  //variable which stores all user choices
  let pool = {
    passwordLength: passwordLength,
    wantLowerCase: wantLowerCase,
    wantUpperCase: wantUpperCase,
    wantNumeric: wantNumeric,
    wantSpecial: wantSpecial,
  };
  return;
}

getPasswordOptions(); //this calls the function

// Function for getting a random element from an array
function getRandom(arr) {
  let randomElement = Math.floor(Math.random() * arr.length);
  let randomIndex = arr[randomElement];
  //console.log(randomIndex, arr[randomElement]);
  
  return randomIndex;
}
//test of function
let randomSpecial = getRandom(specialCharacters);
console.log(randomSpecial);
let randomNumeric = getRandom(numericCharacters);
console.log(randomNumeric);
let randomLowerCase = getRandom(lowerCasedCharacters);
console.log(randomLowerCase);
let randomUpperCase = getRandom(upperCasedCharacters);
console.log(randomUpperCase);

// Function to generate password with user input
function generatePassword() {
  //let option = getPasswordOptions();
  //console.log(option);

  let result = [];
  let ultimate_password = [];
  
  for (let index in getPasswordOptions.pool){
    ultimate_password += getPasswordOptions.pool[index];
    result.push(getRandom(getPasswordOptions.pool[index]));
  }
  for (let i=0; i<getPasswordOptions.passwordlength; i++){
    result.push(getPasswordOptions.pool(ultimate_password));
  }
  return result;
}
generatePassword();

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
