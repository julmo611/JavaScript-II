// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function nameLastName (firstName, lastName) {
  const startingName = "My name is";
 
  function makeFullName () {
    return (`${startingName} ${firstName} ${lastName}`);    
}
return makeFullName ();
}

console.log(nameLastName ("Julian", "Moreno"));



// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const todaysCoffees = () => {
	let coffee = 0;
	
	return function() {
		return ++coffee;
	}
};

const newTodaysCofees = todaysCoffees();
console.log(newTodaysCofees() + " ");
console.log(newTodaysCofees() + " One more");
console.log(newTodaysCofees() + " One more");
console.log(newTodaysCofees() + " One more");
console.log(newTodaysCofees() + " One more");
console.log(newTodaysCofees() + " One more");



/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
