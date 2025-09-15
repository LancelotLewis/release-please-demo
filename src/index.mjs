import { a } from "./m-a.mjs";
import { b } from "./m-b.mjs";

function echoA() {
	console.log(a);
}

function echoB() {
	console.log(b);
}

function main() {
	echoA();
	echoB();
}
main();
