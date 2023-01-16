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
  //variables for user password options' choice
  let wantLowerCase;
  let wantUpperCase;
  let wantNumeric;
  let wantSpecial;
  //user sets up conditions of the password or gets alerted if chooses password length outside of range
  if (passwordLength > 10 && passwordLength < 64) {
    wantLowerCase = confirm(
      "Do you want to have lower cases in your password? OK for yes, cancel for no."
    );
    wantUpperCase = confirm(
      "Do you want to have Upper cases in your password? OK for yes, cancel for no."
    );
    wantNumeric = confirm(
      "Do you want to have numeric characters in your password? OK for yes, cancel for no."
    );
    wantSpecial = confirm(
      "Do you want to have special characters in your password? OK for yes, cancel for no."
    );
  } else {
    alert(
      "You must choose a number between 10 and 64 characters. Refresh page."
    );
  }
  //alert for user if none of password characterstics are chosen
  if (
    wantLowerCase === false &&
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
  return pool;
}

getPasswordOptions(); //this calls the function

// Function for getting a random element from an array
function getRandom(arr) {
  let randomElement = Math.floor(Math.random() * arr.length);
  let randomIndex = arr[randomElement];
  return randomIndex;
}

// Function to generate password with user input
function generatePassword() {
  //this allows to get to user's choices
  let option = getPasswordOptions();
  console.log(option);

  let sumsCharacters = []; //joins arrays with randomly chosen characters
  let intermediate = []; //intermediate joins arrays based on user's password options choice
  let ultimatePassword = [];

  if (option.wantLowerCase) {
    intermediate = intermediate.concat(lowerCasedCharacters);
    sumsCharacters.push(getRandom(lowerCasedCharacters));
  }
  if (option.wantUpperCase) {
    intermediate = intermediate.concat(upperCasedCharacters);
    sumsCharacters.push(getRandom(upperCasedCharacters));
  }
  if (option.wantNumeric) {
    intermediate = intermediate.concat(numericCharacters);
    sumsCharacters.push(getRandom(numericCharacters));
  }
  if (option.wantSpecial) {
    intermediate = intermediate.concat(specialCharacters);
    sumsCharacters.push(getRandom(specialCharacters));
  }

  console.log(intermediate);

  for (let index = 0; index < option.passwordLength; index++) {
    var yourPassword = getRandom(intermediate);
    console.log(yourPassword);
    ultimatePassword.push(yourPassword);
  }

  console.log(ultimatePassword);
  return ultimatePassword.join("");
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
