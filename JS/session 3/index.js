// const input=prompt();
// if(!input){ //input은 문자열 타입인데 not을 쓴다?->   !'' =>true
//     console.log("입력값이 없습니다.");
// } else{
// console.log(input);
// } // !undefined, null, 0,'',NAN -> true

//const add=(a,b)=>a+b; //화살표 함수 싱기방기
//const add= function(a,b){return a+b}는 위와 동일한 코드

//function exec(fn){ fn(1);}

// const button = document.querySelector("button");
// const printClicked = () =>{
//     console.log('clicked');
// }
// button.addEventListener('click',printClicked);
// 자바스크립트는 비동기적 (순서대로 작업 X, 빨리빨리)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res=>res.json())
//     .then(console.log);
// console.log('test'); //비동기적으로 짠 경우

// const me={
//     name:"추인식",
//     age:26,
//     gender:'male',
// };
// const someone={
//     name:"추인순",
//     age:26,
//     gender:'female',
// };

// function addMilitaryStateIfmMale(person) {
//     if (person.gender==='male'){
//         person.militaryState=false;
//     }    
// }

// addMilitaryStateIfmMale(me);
// addMilitaryStateIfmMale(someone);

// console.log(me);
// console.log(someone);

// function parseBoolean(value){
//     if(value===true){
//         return "참";
//     }else if(value===false){
//         return "거짓";
//     }
// }

// if (me.militaryState !==undefined){
//     console.log(parseBoolean(me.militaryState));
// }
// if(someone.militaryState!==undefined){
//     console.log(parseBoolean(someone.militaryState));
// }

// const input=prompt();

// console.log(input||"입력값이 없습니다."); //많이 줄여졌다.

// const me ={
//     name: "추인식",
//     age:25,
// };

// const name=me.name;

// console.log(name);
// console.log(name);
// console.log(name);

// const {name,age}=me; //비구조화 할당
// console.log(name);
// console.log(name);

// const me ={
//     name: "추인식",
//     age:25,
// };

// const militaryMe = {
//     ...me,
//     militaryState:false,
// };

// console.log(militaryMe);

// const animals =["개","고양이"];
// const anotherAnimails = [...animals,'참새'];
//  // type에 따라서 사용가능, spread
// console.log(anotherAnimails);

const me ={
    name: "추인식",
    age:25,
    militaryState:false,
};

const{militaryState,...another}=me;
console.log(another);
const numbers=[0,1,2,3,4,5,6];
const[zero,...rest]=numbers;
console.log(rest);
