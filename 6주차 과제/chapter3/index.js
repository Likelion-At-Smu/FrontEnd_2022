// const input = prompt();


// if (input === "") {
//     console.log("입력값이 없습니다.");
// } else {
//     console.log(input);
// }

// const me = {
//     name: "유예빈",
//     age: 26,
//     gender: 'male',
// };

// const someone = {
//     name: "홍길순",
//     age: 27,
//     gender: "female",
// };

// function addMilitaryStateIfMale(person) {
//     if (person.gender === 'male') {
//         person.militaryState = false;
//     }
// }

// addMilitaryStateIfMale(me);
// addMilitaryStateIfMale(someone);

// console.log(me);
// console.log(someone);

// function parseBoolean(value) {
//     if (value === true) {
//         return "참";
//     } else if (value === false) {
//         return "거짓";
//     }
// }

// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
// someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState));


// const input = prompt();
// console.log(input || "입력값이 없습니다.")  // || 앞의 값이 없으면 || 뒤 실행


// const me = {
//     name: "유예빈",
//     age: 26,
// };

// const {name, age} = me;
// console.log(me);


// const me = {
//      name: "유예빈",
//      age: 26,
// };

// const militaryMe = {
//     ...me,
//     militaryState: false,
// }

// console.log(militaryMe);

// spread
// const animals = ["개", "고양이"];
// const anotherAnimals = [...animals, "참새"];

// console.log(anotherAnimals);

// rest
const me = {
    name: "유예빈",
    age: 26,
    militaryState: false,
}

const {militaryState, ...another} = me;

console.log(another);

const numbers = [0, 1, 2, 3, 4, 5, 6];

const [zero, ...rest] = numbers;

console.log(rest);