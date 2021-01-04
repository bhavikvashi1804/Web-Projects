//simple parse the JSON
var data = '{ "name":"John", "age":30, "city":"New York"}';
var obj = JSON.parse(data);
console.log(obj);

//parse the date which is present in JSON
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
console.log(obj.birth);


//parse the date which is present in JSON
var text = '{ "name":"John", "birth":"1986-12-14", "city":"New York"}';
var obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});
console.log(obj.birth);


//parse the function
var text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
var obj = JSON.parse(text);
console.log(obj.name);
obj.age = eval("(" + obj.age + ")");
console.log(obj.age());


