/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase().replace(/\s/g,"")
  str2=str2.toLowerCase().replace(/\s/g,"")
  let ArrayStr1 = [], ArrayStr2 = [];
  if (str1.length != str2.length) {
    return false;
  }
  else {
    for (let i = 0; i < str1.length; i++) {
      ArrayStr1.push(str1[i]);
    }
    for (let j = 0; j < str2.length; j++) {
      ArrayStr2.push(str2[j]);
    }
    ArrayStr1.sort();
    ArrayStr2.sort();
    for (let k = 0; k < str1.length; k++) {
      if (ArrayStr1[k] != ArrayStr2[k]) {
        return false;
      }
    }
    return true;

  }

}

module.exports = isAnagram;
