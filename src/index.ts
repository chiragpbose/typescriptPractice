let sales = 123_456_789;
let course: string = "Typescript";
let is_published: boolean = true;
let tuple: [number, string] = [25, "Chirag"];
tuple.push(1); // typescript does not complain here!!
//console.log(tuple);

// const small = 1;
// const medium = 2;
// const large = 3;

//use PascalCase for enum
// enum Size {
// 	Small,
// 	Medium,
// 	Large,
// }
//enum will automatically set Small=0,  Medium=1, Large=2.....
// if you want them to be 1,2,3, just do:
// enum Size {
// 	Small=1,
// 	Medium,
// 	Large,
// }    ... and the Medium and Large will set themselves as 2 and 3 respectively
enum Size {
	Small = 1,
	Medium,
	Large,
}
let mySize: Size = Size.Medium;
console.log(mySize); // outputs 2

console.log(Size.Medium); // outputs 2

//function calculateTax(income) {}  // normal js function
function calculateTax(income: number): void {} // annotate the parameter type and the return type(here, void)

// let employee = { id: 1 };
// employee.name = "cpb";   // while objects can be dynamically defined in js, it cannot in ts

// let employee: { id: number; name?: string } = { id: 1 }; // the questionmark makes it optional
// employee.name = "CPB";

// let employi: { readonly id: number; name?: string } = { id: 2 };
// //employi.id = 2;    this throws an error because readonly acts like a "const"

//since the above it verboe and does not implement D_R_Y, we use type aliases, and use PascalCase
type Employii = {
	readonly id: number;
	name: string;
	retire: (date: Date) => void;
};
let employii: Employii = {
	id: 1,
	name: "Mosh",
	retire: (date: Date) => {
		console.log(date);
	},
};

//union type:
function kgToLbs(weight: number | string): number {
	if (typeof weight === "number") return weight * 2.2;
	else return parseInt(weight) * 2.2;
}

//intersection type:
type Draggable = {
	drag: () => void;
};
type Resizeable = {
	resize: () => void;
};
//we can combine the 2 and create a new type which is the intersection of the 2 types

type UIWidget = Draggable & Resizeable;
let textBox: UIWidget = {
	drag: () => {},
	resize: () => {},
};

//literal type(exact or specific values):
//let quantity: number;
//let quantity: 50 = 52; // compilation error
// we can use intersection type to utilise it
// let quantity: 50 | 100 = 100; this works, or we can create new custom types
type Quantity = 50 | 100;
let quantity: Quantity = 100;
type Metric = "cm" | "inch";

// nullable type:
// normally, all null parameters will be a source of bugs/ errors in strict mode. In  order to bypass this, we use:

function greet(name: string | null | undefined) {
	if (name) console.log(name.toUpperCase);
	else console.log("hole");
}

greet(undefined);
