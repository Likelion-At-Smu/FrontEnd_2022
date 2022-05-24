//1번
// const me = {
//     name: "김혜진",
//     age: 23,
// };

// const {name, age} = me;

// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);
// console.log(name);

//2번
// const animals = ["개", "고양이"];
// const anotherAnimals = [...animals, "참새"];

// console.log(anotherAnimals);

const me = {
    name: "김혜진",
    age: 23,
    militaryState: false,
}

const {militaryState, ...another} = me;

console.log(another);

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest] = numbers;

console.log(rest);