const input = require('sync-input');

botGreet('Bender', '2022');
remindName();
guessAge();
count();
test();
end();

function botGreet(botName, birthYear) {
	console.log(`Hello! My name is ${botName}.
I was created in ${birthYear}.`);
}

function remindName() {
	let userName = input("Please, remind me your name.\n");
	console.log(`What a great name you have, ${userName}!`);
}

function guessAge() {
	console.log("Let me guess your age.\n" +
		"Enter remainders of dividing your age by 3, 5 and 7.");

	// reading all remainders
	let remainder3 = input();
	let remainder5 = input();
	let remainder7 = input();
	let yourAge = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

	console.log(`Your age is ${yourAge}; that's a good time to start programming!`);
}

function count() {
	let userNumber = input("Now I will prove to you that I can count to any number you want.\n");

	for (let n = 0; n <= userNumber; n++) {
		console.log(`${n} !`);
	}
}

function test() {
	console.log(`Let's test your programming knowledge.
Why do we use methods?
1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`);
	while (input() !== "2"){
		console.log("Please, try again.")
	}
}

function end() {
	console.log('Completed, have a nice day!\n' +
		'Congratulations, have a nice day!\n');
}
