// 13. **isLeapYear:**

//     - **Use-case:** Determines if a year is a leap year.
//     - **Sample Inputs:** (2024)
//     - **Sample Output:** True
//     - **Constraints:** Applicable to years.
//     - **Operation:** A leap year is a year, occurring once every four years, 
// which has 366 days including 29 February as an intercalary day.




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


