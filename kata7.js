let camelCase = function(input) {

    let camel=''
    
    for(let i=0; i<input.length; i++){
        if(input[i]==' '){
            camel=camel+input[i].replace(' ', ''+input[i+1].toUpperCase())
            i++
        }
        else camel=camel+input[i]
    }
    return camel;
    
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));