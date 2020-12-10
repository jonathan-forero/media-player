// Boolean
let muted: boolean = true;
muted = false;
// muted = 'muted'; -> Type 'string' is not assignable to type 'boolean'

// Number
let numberA: number = 42;
let numberB: number = 6;
let result = numberA / numberB;

// String
let myName: string = 'Tatán';
let greeting = `My name is ${myName}`;

// Arrays
let people: string[] = [];
people = ['Keanu', 'Chuck', 'Tom'];
// people.push(100); -> Argument of type 'number' is not assignable to parameter of type 'string'
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('Tatán');
peopleAndNumbers.push(100);

// Enums
enum Color {
  Red = 'Red',
  Green = 'Green',
  Blue = 'Blue',
}
let favColor: Color = Color.Red;
console.log(`My Fav color is ${favColor}`);

// Any
let joker: any = 'Joker';
joker = { type: 'Wildcard' };

// Object
let someObject: Object = { type: 'WildCard' };
