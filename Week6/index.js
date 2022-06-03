// const input = prompt();
// if (!input) {
//    console.log("입력값이 없습니다.")
// }
// else {
//    console.log(input);
// }


/* JS에만 있는 함수 -> 화살표 함수 
   
   const add = (a, b) {
      return a + b;
      
   const add = (a, b) => a + b 
   
   

   JS에서는 함수도 일급 객체 (int, string 등과 같은 녀석들과 동등한 위치)
   
   function exex(fn) {
      fn(1);  -->  alert(1);
   }

   exec(console.log);   --> 1 출력
   exec(alert);         --> fn 자리에 alert 대입

-----------------------------------------------------------------------   

   const button = document.querySelector('button');

   const printClicked = () => {
      console.log(clicked);     --> 먼저 함수 선언
   }      

   button.addEventListener('click', printClicked);

-----------------------------------------------------------------------

   const button = document.querySelector('button');

   button.addEventListener('click', () => {
      console.log('clicked');    --> 별도 선언 없이 바로 적용
   }); 

-----------------------------------------------------------------------

   동기 (직렬적으로, 순서대로) 
   비동기 (병렬적으로, 먼저 끝나는대로)

   Python --> 동기적
   JavaScript --> 비동기적

   JS에서 동기적 실행을 하려면 .then 이 있어야 함.

   Promise -> JS의 독자적 문법

   1. Pending : 프로미스 처리 중 
   2. Fulfiled : 프로미스 이행 (정상처리완료)
   3. Rejected : 프로미스 실패 (처리완료 but 비정상적으로)

   */

  /* const me = {
      name : "김재완",
      age : 27,
      gender : 'male',
   };

   const someone = {
      name : "홍길순",
      age : 27,
      gender : 'female',
   };

   function addMilitaryStateIfMale(person) {
      if (person.gender == 'male') {
         person.militaryState = false;
      }
   }

   addMilitaryStateIfMale(me);
   addMilitaryStateIfMale(someone);

   console.log(me);
   console.log(someone);

   function parseBoolean (value) {
      if (value == true) {
         return "참";
      }
      else if (value == false){
         return "거짓";
      }
   }

   if (me.militaryState !== undefined){
      console.log(parseBoolean(me.militaryState));
   }
   if (someone.militaryState !== undefined){
      console.log(parseBoolean(someone.militaryState));
   }

   me.militaryState !== undefined && console.log(parseBoolean(me.militaryState))
   someone.militaryState !== undefined && console.log(parseBoolean(someone.militaryState))
   
   */

   /*

   const input = prompt();
   if (!input) {
      console.log("입력값이 없습니다.")
   }
   else {
      console.log(input);
   }

   const input = prompt();
      console.log(input || "입력값이 없습니다.");

   const me = {
      name : "김재완",
      age : 27,
      gender : 'male',
   };

   // const name = me.name;

   const {name, age} = me;


   console.log(name, age);
   console.log(name);
   console.log(name);
   console.log(name);

   */

   /*

   const a = arr[0];
   const b = arr[1];

   ==> const [a, b] = arr;


   const me = {
      name : "김재완",
      age : 27,
      gender : 'male',
   };

   const militaryMe = {
      ...me,   // 객체 안의 내용을 spread 하겠다.
      militaryState : false,
   }

 -----------------------------------------------------------------------
   
   const animals = ["개", "고양이"];
   const anotherAnimals = [...animals, "참새"];

   console.log(anotherAnimals);

-----------------------------------------------------------------------
   
   const me = {
      name : "김재완",
      age : 27,
      militaryState : false
   };

   const {militaryState, ...another} = me;   // militaryState 제외하고 나머지 출력

   console.log(another);

   const numbers = [0, 1, 2, 3, 4, 5, 6];

   const [zero, ...rest] = numbers;          // zero 제외하고 나머지 출력

   console.log(rest);

   */



