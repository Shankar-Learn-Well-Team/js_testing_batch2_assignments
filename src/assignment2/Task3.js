
//////Program 3 assignment 2//////////


function Person(name, age, city) {
  
  let _n = name;
  let _a = age;
  let _c = city;

  
  this.updateName = function (newName) {
    _n = newName;
  };
  this.updateAge = function (newAge) {
    _a = newAge;
  };
  this.updateCity = function (newCity) {
    _c = newCity;
  };
  this.getInfo = function () {
    return {
      name: _n,
      age: _a,
      city: _c,
    };
  };
}
const xyz = new Person("Shiv", 27, "Pune");
xyz.updateName("Shiv");
xyz.updateAge(27);
xyz.updateCity("Pune");
const updatedPersonInfo = xyz.getInfo();
console.log(updatedPersonInfo);