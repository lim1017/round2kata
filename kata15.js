const squareCode = function(message) {
    let codedSquare=''
    let finalOutput=''
    let noSpace=message.replace(/\s/g, '')
    console.log(noSpace)

    let letterPerRow=Math.ceil(Math.sqrt(noSpace.length))
    console.log(letterPerRow)

    let numOfRows=Math.ceil(noSpace.length / letterPerRow)
    console.log(numOfRows)


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


    let count=0
    for(let i=0; i<codedArr[i].length; i++){
        for(let j=0; j<codedArr[i].length-1; j++){

            finalOutput=finalOutput+codedArr[j][i]
            count++
            if (count==numOfRows){
                finalOutput=finalOutput+' '
                count=0
            }
        }
        
    }
    return finalOutput
  };
  
   console.log(squareCode("feed the dog"));
//  console.log(squareCode("have a nice day"));
//   console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));