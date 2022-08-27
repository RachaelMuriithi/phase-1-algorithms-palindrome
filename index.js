function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}
//console.log(isPalindrome('Anna'))

/* 
  Add your pseudocode here
  change word to toLowerCase
loop through the string checking the first and last characters if they match each time removing the last character
return true or false
*/


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("AnnA"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("PeteRR"));
}

module.exports = isPalindrome;