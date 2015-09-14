/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(number_1, number_2){
    "use strict";
    if(number_1 > number_2){
      return number_1;
      console.log(number_1);
    } else {
      return number_2;
      console.log(number_2);
    }
}
//max(2,4);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(number_1, number_2, number_3){
    "use strict";
    if(number_1 > number_2 && number_1 > number_3) {
      return number_1;
    } else if( number_2 > number_3 && number_2 > number_1){
      return number_2;
    } else {
      return number_3;
    }
}
maxOfThree(100, 200, 300);
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    return char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || false;
}
isVowel('b');
// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";

}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr) {
  return arr.reduce(function(x, y) {
    return x + y;
  });
}


function multiply(arr){
    "use strict";
    return arr.reduce(function(x, y){
      return x * y;
    });
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
function reverse(s) {
  "use strict";
  return s.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
function findLongestWord(array){
  "use strict";
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i].length > count)
      count = array[i].length;
  }
  return count;
}
var sports = ["baseball","basketball","football","golf","soccer"]
findLongestWord(sports);

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
var list = ['hello', 'bye','four','five'];
var number = 3;
function filterLongWords(words, i){
  "use strict";
    var newArray = [];
    for(x = 0; x < words.length; x++){
      if(words[x].length > i){
      newArray[newArray.length] = words[x];
    };
  };
  return newArray;
};
filterLongWords(list, number);
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
var string = 'asdeaddaadeadsaegsad';
//output : a = 7  d = 6 ..

function charFreq(string){
  "use strict";
  var charList = {};
  for (var x = 0; x < string.length; x++) {
  if (string.charAt(x) in charList)
    charList[string.charAt(x)] += +1;
  else
    charList[string.charAt(x)] = 1;
  }
  return charList;
}
