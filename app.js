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

//Legal Drinking Age
function canDrink(age){ 
	if(age < 21) { return console.log("You are: " + age + " You can't drink, better ask an adult."); }
	else { return console.log("You are: " + age + ' You can drink.'); }
} 
//or if you want bool value
function canDrinkBool(age) { return age > 21; }
canDrink(22);
console.log(canDrinkBool(20)); //returns false

//var gradePrompt = prompt('Enter a number 0-100 to determine the grade: ');
var gradePrompt = prompt('Enter a number 0-100 to determine the grade: ');
	gradePrompt = parseInt(gradePrompt);

//Letter grade function
function letter(grade){


	while(grade > 100 || grade < 0){ 
		console.log('That is not a valid choice.')
		gradePrompt = prompt('Enter a number 0-100 to determine the grade: ');
		grade = parseInt(gradePrompt);
	}

	if(grade >= 90) { return 'A'}
	else if (grade >= 80) { return 'B'; }
	else if (grade >= 70) { return 'C'; }
	else if (grade >= 60) { return 'D'; }
	else { return 'F'; }

}

console.log(letter(gradePrompt));

//Calculate tax function
function addTax(number, percent){
	percent = percent / 100;
	number *= percent;
	return number;
} 

console.log('You will owe $' + addTax(200, 10) + ' in tax.');









