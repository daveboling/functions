var prompt = require('sync-prompt').prompt;


function increment(x){
	return x += 1;
}
function square(x){
	return x * x;
}
var b = increment(5);
console.log(b);
b = square(5);
console.log(b);


