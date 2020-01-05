let calculateChange = function(total, cash) {
  // Your code here
  let change = cash - total
  let chgTypes=[2000, 1000, 500, 200, 100, 25, 10, 5, 1]
  let chgTypesBill=['twentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quater', 'dime', 'nickel', 'penny']
  let chg=[]
  let finalOutput=''

  for(let i=0; i<chgTypes.length; i++){
      let x=Math.floor(change/chgTypes[i])
      change=change-x*chgTypes[i]
      chg.push(x)
  }
  
  for(let i=0; i<chgTypes.length; i++){
    if (chg[i]!==0){
        finalOutput=finalOutput+chgTypesBill[i] + ':' + chg[i]+', '
        
    }

  }

  return finalOutput
  }




console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));