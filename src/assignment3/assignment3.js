// 13. **isLeapYear:**


let leapYearFun= function (year){
    if(year % 400==0 || (year % 4==0 && year % 100 !=0)){
        console.log("It is Leap Year -",year);
        return true;
    }
    else{
        console.log("It is not Leap Year")
        return false;
    }
}

console.log(leapYearFun(2024));


