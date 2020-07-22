// Assignment Code
var generateBtn = document.querySelector("#generate");

// This function prompts the user to include their desired character criteria as well as length before generating the final password.
function random_password_generate()
{
  var passwordChars = ""; // By default, the character bank is empty.
  var lowerCase = confirm("Would you like you include lowercase characters?")
    if (lowerCase == true) {
      passwordChars = passwordChars + "qwertyuiopasdfghjklzxcvbnm"; // Add lowercase.
  }
        alert(passwordChars); // These alerts show a progression of the characters that may be included in the password as the user answers more prompts.
  var upperCase = confirm("Would you like to include uppercase characters?")
    if (upperCase == true) {
      passwordChars = passwordChars + "QWERTYUIOPASDFGHJKLZXCVBNM"; // Add uppercase.
  }
        alert(passwordChars);
  var numericChars = confirm("Would you like to include numeric characters?")
    if (numericChars == true) {
      passwordChars = passwordChars + "0123456789"; // Add  numbers.
  }
        alert(passwordChars);
  var specialChars = confirm("Would you like to include special characters?")
    if (specialChars == true) {
      passwordChars = passwordChars + "!@#$%^&*()"; // Add specials.
  }
        alert(passwordChars);
  var passwordLength = prompt("How many characters would you like to generate? Note: Any values that are not between 8 and 128 will not produce a password.");
      passwordLength = parseInt(passwordLength);
    if (passwordLength < 8 || passwordLength > 128) {
      alert("You must enter a value between 8 and 128 characters.")
      passwordLength.preventDefault() // This area prevents users from creating a password under 8 or over 128 characters.
  }      
        alert(passwordLength);
  var password = Array (passwordLength).fill(passwordChars).map(function(x) { return x[Math.floor(Math.random() * x.length)] }).join('');
  return password; // Password generation. If the user failed to select any character criteria, they will not be given a password.
}
document.getElementById("generatePassword").addEventListener("click", function() {
    random_password = random_password_generate();
    document.getElementById("password").value = random_password;
  });
