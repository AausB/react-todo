const add = (a, b) => {
  return a + b;
};

console.log(add(3, 1));

let toAdd = [9, 5];
// the spread operator is ...
// it resolves the Array into its items
console.log(add(...toAdd));

console.log(add(...[1, 2]));


///////////////////////////////////

let groupA = ['Jen', 'Cory'];
let groupB = ['Vikram'];

let final = [3];
console.log(final);

final = [3, ...groupA];
console.log(final);

final = [...groupB, 3, ...groupA];
console.log(final);

//////////////////////////////////
const greet = (name, age) => {
  console.log(`Hi ${name}, you are ${age}`);
}

let person = ['Andrew', 25];
let personTwo = ['Jen', 29];

greet(...person);
greet(...personTwo);

//////////////////////////////////
let names = ['Mike', 'Ben'];
let finalNames = ['Andrew', ...names];

finalNames.forEach((name) => {
  console.log(`Hi ${name}`);
});
