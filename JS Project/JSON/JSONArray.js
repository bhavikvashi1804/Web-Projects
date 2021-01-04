//create
var cars = ["Ford", "BMW", "Fiat"];

//array in JSON object
var p1 = {
  name: "John",
  age: 30,
  cars: ["Ford", "BMW", "Fiat"],
};

//access
var car1 = cars[1];
console.log(car1);

//update
cars[1]= "Honda";

//loop
for (x in cars) {
  console.log(cars[x]);
}

//delete item
delete cars[1];

for (x in cars) {
    console.log(cars[x]);
}
  