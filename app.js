var prompt = require('sync-prompt').prompt;

function increment(x){ return x += 1; }
function square(x){ return x * x;}
function area(length, width){ return length * width; }

function volume(l, w, h){ return area(l, w) * h; }
//Incremenet function
var b = increment(5);
console.log("Increment of 5: " + b);
//Square function
b = square(5);
console.log("Square of 5: " + b);

//Area function
console.log("Area of L:50, W:50 Area = " + area(50, 50));

//Volume function
console.log("Volume of L:50, W:50, H:10 Volume = " + volume(50, 50, 10));

//Nested functions
var z = area(square(increment(3) + increment(4)), square(2));
console.log("Next function called: z = " + z);

//say, "Hello" function
function sayHello(){ console.log('Hello'); }
sayHello();

//Convert word to upper case function
function upper(word) { return word.toUpperCase(); }
console.log(upper('yall'));

