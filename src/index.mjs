import { a } from "./m-a.mjs";
import { b } from "./m-b.mjs";
import { c } from "./m-c.mjs";

function echoA() {
	console.log(a);
}

function echoB() {
	console.log(b);
}

function echoC() {
	console.log(c);
}

function main() {
	echoA();
	echoB();
	echoC();
}
main();
