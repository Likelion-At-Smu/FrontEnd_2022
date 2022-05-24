// const input = prompt();
// //입력값이 없으면 없다고 출력
// if (input ===""){
//     console.log("입력값이 없습니다.")
// } else{
// console.log(input);
// }

// function exec(fn) {
//     fn(1);
// }
// exec(console.log);
// exec(alert);
// //비동기를 처리하는 방법
// fetch("")
//     .then(res => res.json())
//     .then(console.log);
// console.log('test');
//객체 만들어주기
// const me={
//     name: "윤석열",
//     age: '62',
//     gender: 'male',
// };

// const someone ={
//     name: "홍길순",
//     age: 27,
//     gender: "female",
// };
// 
// function addMilitaryStateIfMale(person){
//     if (person.gender === 'male'){
//         person.MilitaryState = false;
//     }
// }

// addMilitaryStateIfMale(me);
// addMilitaryStateIfMale(someone);
// console.log(me);
// console.log(someone);

// function parseBoolean(value) {
//     if (value === true) {
//         return "참";
//     }
//     else if(value === false){
//         return "거짓";
//     }
// }
// //
// //
// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
// 
// me.militaryState !== undefined && console.log(parseBoolean(me.militaryState));
 
// const input = prompt();

// // if (input ==="") {
// //     console.log("입력값이 없습니다");
// // }
// // else{
// //     console.log(input);
// // }
// //
// //
// console.log(input || "입력값이 없습니다.");

// const me ={
//     name: "김재완",
//     age: 27,
// };

// //const name = me.name;
// 
// //const { name } = me;
// 
// const { name,age } = me;


// console.log(name);

// const a = arr[0];
// const b = arr[1];
// 
// const[a,b] = arr;

// const a = obj.a;
// const b = obj.b;
// 
// const{ a,b }= obj;

// const me = {
//     name: "김재완",
//     age: 27,
// };
// //spread기법 사용하기
// const militaryMe = {
//     ...me,
//     militaryState: false;
// }

// console.log(militaryMe);

// const animals = ["개", "고양이"];
// //spread용법
// const anotherAnimals = [...animals, "참새"];
// 
// console.log(anotherAnimals);

// const me = {
//     name:"김재완",
//     age: 27,
//     militaryState :false,
// }

// const{ militaryState, ...another} = me;

// console.log(another);

// const numbers = [0,1,2,3,4,5,6];

// const [zero,...rest] = numbers;
//
// console.log(rest);