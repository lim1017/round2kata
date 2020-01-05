const squareCode = function(message) {
    let codedSquare=''
    let finalOutput=''
    let noSpace=message.replace(/\s/g, '')
    

    let letterPerRow=Math.ceil(Math.sqrt(noSpace.length))
        let numOfRows=Math.ceil(noSpace.length / letterPerRow)
    


    let counter =0;
    for(let i=0; i<noSpace.length; i++){
        codedSquare=codedSquare+noSpace[i]
        counter++

        if (counter==letterPerRow){
            codedSquare=codedSquare+'\n'
            counter = 0;
        }
    }
    codedSquare=codedSquare.trim()
    console.log(codedSquare)
    let codedArr=codedSquare.split('\n')
    console.log(codedArr)


    
    for(let i=0; i<letterPerRow; i++){
        for(let j=0; j<codedArr.length; j++){

            if (i>=codedArr[j].length){
                break;
            }

            else finalOutput=finalOutput + codedArr[j][i]
                
        }
        finalOutput=finalOutput+' '
    }
    return finalOutput
  };
  
   console.log(squareCode("feed the dog"));
 console.log(squareCode("have a nice day"));
  console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));