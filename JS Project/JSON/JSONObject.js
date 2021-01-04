//create 
var myObj = { "name":"John", "age":30, "car":null };

//access 
console.log(myObj.name);

//update
myObj["name"] = "Bhavik";
console.log(myObj.name);

//loop
for(x in myObj){
    console.log("key: "+x+",value: "+myObj[x]);
}

//delete prop
delete myObj.car;
console.log(myObj);