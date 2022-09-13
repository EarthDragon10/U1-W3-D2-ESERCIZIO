// Primo e secondo punto dell'esercizio

let num = 2;

num += 4;

console.log(num);

const NUM = 5;

// NUM += 10;
console.log(NUM); // dá errore perché non é possibile riassegnare una costante

function add() {
	let num = 3;
	return num;
}

console.log(num, add());

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
