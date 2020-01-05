//all cases need to have snake/upper syntax added to them to fully complete kata.

const makeCase = function(input, type) {
    let finalOutput=''
    let typeArr=[]

// to handle last case i convert all types into an array.
    if (typeof type=='string'){
        typeArr.push(type)
    }
    else typeArr=type
    
for(let i=0; i<typeArr.length; i++){
    
    //Camel
    if (typeArr[i] == "camel"){
        let camel=''
    
    for(let i=0; i<input.length; i++){
        if(input[i]==' '){
            camel=camel+input[i].replace(' ', ''+input[i+1].toUpperCase())
            i++
        }
        else camel=camel+input[i]
    }
    return camel;
    }


    //Pascal
    if (typeArr[i] == "pascal"){
        let pascal=''

    pascal=input[0].toUpperCase()

    for(let i=1; i<input.length; i++){
        if(input[i]==' '){
            pascal=pascal+input[i].replace(' ', ''+input[i+1].toUpperCase())
            i++
        }
        else pascal=pascal+input[i]
    }
    return pascal;
    }

    //Snake
    if (typeArr[i] == "snake"){
        if (i==0){
            finalOutput=''
        }

    for(let i=0; i<input.length; i++){
        if(input[i]==' '){
            finalOutput=finalOutput+input[i].replace(' ', '_')
        }
        else finalOutput=finalOutput+input[i]
    }
    return finalOutput;
    }

    //kebab
    if (typeArr[i] == "kebab"){
        let kebab=''

    for(let i=0; i<input.length; i++){
        if(input[i]==' '){
            kebab=kebab+input[i].replace(' ', '-')
        }
        else kebab=kebab+input[i]
    }
    return kebab;
    }

    //Title
    if (typeArr[i] == "title"){
        let title=''

    title=input[0].toUpperCase()

    for(let i=1; i<input.length; i++){
        if(input[i]==' '){
            title=title+input[i].replace(' ', ' '+input[i+1].toUpperCase())
            i++
        }
        else title=title+input[i]
    }
    return title;
    }

    //vowel
    if (typeArr[i] == "vowel"){
        let vowel=''
        let vowelRegex = /a|e|i|o|u/

    for(let i=0; i<input.length; i++){
        if(vowelRegex.test(input[i])==true){
            vowel=vowel+input[i].toUpperCase()
            
        }
        else vowel=vowel+input[i]
    }
    return vowel;
    }

    //consonant
     if (typeArr[i] == "consonant"){
        let vowel=''
        let vowelRegex = /a|e|i|o|u/

    for(let i=0; i<input.length; i++){
        if(vowelRegex.test(input[i])==false){
            vowel=vowel+input[i].toUpperCase()
        }
        else vowel=vowel+input[i]
    }
    return vowel;
    }

    //Upper
    if (typeArr[i] == "upper"){
        if (i==0){
            finalOutput=''
        }
        finalOutput=finalOutput+ input.toUpperCase()      
    return finalOutput;
    }
} //end loop
} //end function

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));