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
console.log(area(50, 50));

//Volum function
console.log(volume(50, 50, 10));