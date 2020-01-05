const urlDecode = function(text) {

  let finalArr=[]
  let finalOutput={}
  let spaceTxt=text.replace(/%20/g,' ')
  textArr=spaceTxt.split('&') 
  
    for(let i=0; i<textArr.length; i++){
        finalArr.push(textArr[i].split('='))
    }


    for (let i=0; i<finalArr.length; i++){

        for (let j=1; j<finalArr[i].length; j++){
            finalOutput[finalArr[i][0]]=finalArr[i][j]
        }
    }

    //finalOutput[finalArr[0][0]]=finalArr[0][1]

    





  return finalOutput


};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);