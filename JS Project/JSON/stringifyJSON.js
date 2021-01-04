//array 
var arr = [ "John", "Peter", "Sally", "Jane" ];
var myJSON = JSON.stringify(arr);
console.log(myJSON);



//date
var obj = { name: "John", today: new Date(), city : "New York" };
var myJSON = JSON.stringify(obj);
//stringify auto date => string

//functions
var obj = { name: "John", age: function () {return 30;}, city: "New York" };
obj.age = obj.age.toString();
var myJSON = JSON.stringify(obj);