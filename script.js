// Assignment Code

// Keeps the generated password displayed in the box
var generateBtn = document.querySelector("#generate");

// list of assigned variables where it will generate the password from
var specialButtons= ['@','!','^','%','^','^','&','&','*','(','$'];

var numeroCharacter=['0','1','2','3','4','5','6','7','8','9'];

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var setOfCharacters =[];




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// An event listener that helps generate button and make it function
generateBtn.addEventListener("click", writePassword);


function generatePassword(){
  var result ="";
  //What is displayed when generate password button is clicked and shows the user the rules for getting a password
  var length = prompt("List amount of characters needed for your password. (Choose between 8 through 128)");
  if (isNaN(length)){
    alert ("Number is required!");
    return generatePassword()

  } 
  //the required range of the length for the password
  if(length<8 || length> 128){
  alert("Come on! You have to select a number from 8 - 128 if you want a password");
    return generatePassword()
  }

  //When choosing password lenght each of questions appear to generate the type of password you like
  var chosenUpper = confirm("Would you like it to include an upper case letter?");
  var chosenLower = confirm("How about a lower case letter?");
  var chosenNumber = confirm("and a number?");
  var chosenSpecial = confirm("Lastly, should it include a special character?");

  if (!chosenUpper&&!choseLower&&!chosenNumber&&!chosenSpecial){
    alert("Please chose a type of character");
    return generatePassword()
  }
//if yes scenarios that lets you choose what characters you want to place in the passsword
//if yes to special characters add to pool of characters for password
  if(chosenSpecial  ){
    setOfCharacters += specialButtons
  }
  //if yes to numbers, add to pool of characters for password
  if(chosenNumber){
    setOfCharacters += numeroCharacter
  }
  //if yes to lower case characters, add to pool of characters for password
  if(chosenLower){
    setOfCharacters += upperCase
  }
  //if yes to upper case letters, add to pool of characters for password
  if(chosenUpper){
    setOfCharacters += lowerCase
  }
//string for the chosen random characeters list 
  for (var i = 0; i < length; i++){
    result += setOfCharacters.charAt(Math.floor(Math.random() * setOfCharacters.length));
  }
  //the final result outputted into the field that is on the page
  return result;
}