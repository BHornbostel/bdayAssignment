var daysUntilMyBirthday = 60;
while(daysUntilMyBirthday != 0){
    if(daysUntilMyBirthday>30){
        console.log("its " +daysUntilMyBirthday+ " days until my birthday. Such a long time.... :(");
    }
    else if(5<daysUntilMyBirthday<30){
        console.log("its "+daysUntilMyBirthday+ "days until my birthday. its within a month!");
    }
    else{
        console.log("it's "+daysUntilMyBirthday+ "DAYS UNTIL MY BIRTHDAY!!!!!!");
    }
    daysUntilMyBirthday--;
}
console.log("WOO PARTY TIME");