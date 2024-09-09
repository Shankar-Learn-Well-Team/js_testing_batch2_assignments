//traditional for loop
const arr=[0,11,22,33,44];
for(let i=0;i<5;i++)
{
console.log(arr[i]);
}
//for...of loop
//on array
for(const item of arr)
{
    console.log(item);
}

//on string
const str= "pooja"
for(const char of str)
{
    console.log(char);
}
//on map
const map=new Map([['name',"pooja"],['age',26],['city','pune']]);
for(const [key,value] of map)
{
 console.log(`${key}:${value}`)
}
for(const key of map.keys())
{
    console.log(`${key}`)
}
for(const value of map.values())
{
    console.log(`${value}`)
}

// let mySetWithValues = new Set([1, 2, 3, 4, 5]);
// for(items of mySetWithValues)
// {
//     console.log(items)
// }
//for in
const person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

//for each
const abc=[9,3,4,1,5];
abc.forEach((numb)=>{
  console.log("array numbers"+numb)

})