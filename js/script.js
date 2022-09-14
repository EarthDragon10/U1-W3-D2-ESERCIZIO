// Primo e secondo punto dell'esercizio

let num = 2;
var random_num = 10;

num += 4;

console.log(num);

const NUM = 5;

// NUM += 10;
console.log(NUM); // dá errore perché non é possibile riassegnare una costante

// function add() {
// 	var num_1 = num;
// }

// add();

function add2() {
	var random_num2 = random_num;
}

add2();

// console.log(num, num_1);
// console.log(random_num, random_num2);

// Terzo punto dell'esercizio

let string = "Stringa";
let boolean = true;
let notDefined = undefined;
let emptyObject = null;

console.log({
	Stringa: string,
	Boolean: boolean,
	Undefined: notDefined,
	Null: emptyObject,
});

// Quarto punto dell'esercizio

console.log(`${string} e ${boolean}`);
console.log(string + boolean);

// Quinto punto dell'esercizio

console.log((num *= 6));
