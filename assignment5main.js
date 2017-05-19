
function addNumbers(numberA, numberB) {
  return numberA + numberB;
  console.log(numberA + numberB);
}
var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo)
 // 4


function yell(word){
  return (word.toUpperCase())
}

function yell10(words){
  for (var i = 0; i< 10; i++){
    var word = yell(words)
    console.log(word);
  }
}

console.log(yell("word"));
yell10("something");


function longest(input1, input2) {
  if(input1.length>input2.length){
    return input1
  }
  else if(input2.length>input1.length) {
    return input2
  }
}

var appleProducts = ["iMac", "iTouch", "MacBook Pro"];
var instructor = "Joshua";

var result = longest(appleProducts, instructor);
console.log(result);


function isVowel(char){
  if (char === "A" || char === "E" || char === "I" || char === "O" || char === "U" ||
  char === "a"|| char === "e" || char === "i" || char === "o" || char === "u"){
    return true;
  }
  else {
    return false
  }
}
var result = isVowel("A")
