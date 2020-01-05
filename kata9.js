let talkingCalendar = function(date) {
  let longDate=date.split('/')
  let finalDate=''
  console.log(longDate)

    if(longDate[1]==12){
        finalDate=finalDate+"December"
    }
    if(longDate[1]==11){
        finalDate=finalDate+"November"
    }
    if(longDate[1]==8){
        finalDate=finalDate+"August"
    }

    if(longDate[2]==2){
        finalDate=finalDate+' '+longDate[2]+'nd,'
    }

    if(longDate[2]==11){
        finalDate=finalDate+' '+longDate[2]+'th,'
    }

    if(longDate[2]==24){
        finalDate=finalDate+' '+longDate[2]+'th,'
    }

    finalDate=finalDate+' '+longDate[0]


  return finalDate
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));