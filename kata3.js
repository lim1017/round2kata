let numberOfVowels = function(data) {
    // Put your solution here
    let numVowel=data.match(/a|e|i|o|u/gi)
    
return numVowel.length
  };
  
  console.log(numberOfVowels("orange"));
  console.log(numberOfVowels("lighthouse labs"));
  console.log(numberOfVowels("aeiou"));