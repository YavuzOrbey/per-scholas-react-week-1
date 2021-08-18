
function sunnyDayMessage(isSunny:boolean, numberSunnyDays:number):string {
    if(numberSunnyDays > -1)
        return `Hi! It is ${isSunny ? `sunny today and it has been sunny for ${numberSunnyDays} days in a row`: "not sunny today.."}`;
    return "Err: number of sunny days must be greater than or equal to 0";
}


console.log(sunnyDayMessage(true, 1))