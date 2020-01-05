const urlEncode = function(text) {
  // Put your solution here
  let space=text.trim().replace(/\s/g, '%20')

  return space   
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));