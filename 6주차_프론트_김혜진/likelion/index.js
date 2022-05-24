//1번
// const result = fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(res => res.json())
// .then(console.log);
// console.log('test');

//2번
// const me = {
//     name: "김혜진",
//     age: 23,
//     gender: 'female',
// };

// const someone = {
//     name: "홍길동",
//     age: 25,
//     gender: "male",
// };

// function addMilitaryStateMale(person) {
//     if (person.gender === 'male') {
//         person.militaryState = false;
//     }
// }

// addMilitaryStateMale(someone);
// addMilitaryStateMale(me);

// function parseBoolean(value) {
//     if (value === true) {
//         return "참";
//     } else if ( value === false) {
//         return "거짓";
//     }
// }

// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
// someone.militaryState !-- undefined && console.log(parseBoolean(someone.militaryState));


//3번
const input = prompt();

console.log(input || "입력값이 없습니다.");