//////Program 1 assignment 1//////////
const array=[55,44,22,11];

function CalculateSum(a){
    let sum=0;

for(let i=0;i<array.length;i++)
{
    sum  += a[i];
}
return sum;
}
console.log(CalculateSum(array));


