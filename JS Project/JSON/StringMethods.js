//length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log(sln);



//find the index
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate");
console.log(pos);
var lastPos = str.lastIndexOf("locate");
console.log(lastPos);
var pos1 = str.search("locate");
console.log(pos);
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).



//slice 
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
//1st arg -ve: start position from RHS
//2nd is length
//2nd arg -ve: opposite from position direction 
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.slice(7);
console.log(res); //Banana, Kiwi

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12);
console.log(res); //Banana, Kiwi



//substring
var str = "Apple, Banana, Kiwi";
var res = str.substring(7,13); //Banana



//substr
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res); //Banana

var str = "Apple, Banana, Kiwi";
var res = str.substr(7);
console.log(res); //Banana, Kiwi

var str = "Apple, Banana, Kiwi";
var res = str.substr(-4);
console.log(res); //Kiwi




//replace the string
str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);

str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);







// other methods
var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper
console.log(text2);

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower
console.log(text2);

var str = "     Hello World!     ";
var str1 = str.trim();
console.log(str.length); //22
console.log(str1.length); //12

var text1 = "Hello";
var text2 = "World!";
var text3 = text1.concat(" ",text2);
console.log(text3);

var str = "1234";
str = str.padStart(10,0);
//1st arg total length
//2nd arg what to fill
console.log(str); // 0000001234

var str = "1234";
str = str.padStart(10,'*');
//1st arg total length
//2nd arg what to fill
console.log(str); // ******1234


var str = "1234";
str = str.padEnd(10,0);
console.log(str); // 1234000000

var str = "1234";
str = str.padEnd(10,'*');
console.log(str); // 123456******


var str="Bhavik";
console.log(str.charAt(0)); //B
console.log(str.charCodeAt(0));//UTF-16 code 66


var txt="Hello world";
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe
var res1 = txt.split(""); // Split on characters
console.log(res1);           
