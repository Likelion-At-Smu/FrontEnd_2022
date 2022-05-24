/* console.log("7" * "4"); // 28
console.log("7" + "4"); // 74
console.log("Hello" * "World"); // NaN -> 숫자로 변환 할 수 없는 것을 시도할 때 에러대신 
 */
/* 자바스크립트는 데이터 타입을 자기가 맞다고 생각하는 대로 변환 
따라서 정확하게 데이터 타입을 넘겨줘야 함  */

/* Truthy -> true 같은 거 실제 true는 아니지만 true로 변환 
Falsy -> false 같은 거 
 */
//사용자가 입력한 내용을 그대로 콘솔에 출력하는 프로그램 

/* const input = prompt();
if(input ===""){ // ==if(!input)
    console.log("입력 값이 없습니다");
}
else{
    console.log(input)
}
console.log(input);
 */
/*true 인 경우
!undefined
!null
!0
!''
!NaN
-------------------------------------------------------
*/

/* 1.함수 입력과 출력이 선택적임
2.side-effect (부가기능이 있다.) 입 출력과 상관없는 기능 
화살표 함수 == 람다 
function add(a,b){
    return a+b; 
}
위의 함수를 
const add = (a,b)=>{
    return a+b;
}
로 표현 할 수 있음 
const add =( a, b) => a+b; 
------------------------------------------------------
*/

/* 일급 객체 (First-class citizen)
1. 해당 타입이 변수에 할당될 수 있어야 한다.
2. 해당 타입이 함수의 인자로 넘어갈 수 있어야 한다. 
3. 해당 타입이 함수의 반환값으로 반환될 수 있어야 한다. 

기본적인 데이터 타입들  , 함수 
함수를 다른 함수의 인자로 넘기는 경우가 많음 ex) addEventListener
addEventListener('click',printClicked);

button.addEventListener('click',() => {
    console.log('clicked');
})
------------------------------------------------------- */

/* /* 비동기 자바스크립트 
비동기 ? 병렬적으로 , 먼저 끝나는대로  , 빨리 되는것 부터 미리미리 
동기 ? 직렬적으로 , 순서대로 

.then  -> 이게 끝나면 그다음 이거 실행  

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json()) //그 전에 들어온 데이터 res 를 json으로 리턴할게 
    .then(console.log); // 그것도 끝나면 콘솔로 찍어줘 
console.log('test');

프로미스 (promise) , 프로미스는 자바스크립트만 가지는 
상태 1. Pending: 프로미스 처리중 
     2. Fulfilled : 프로미스 이행(정상처리완료)
     3. Rejected : 프로미스 실패(처리완료, 하지만 비정상적으로 ) 
--------------------------------------------------------*/

/* 논리 연산자 심화 
&& 앞 뒤 값이 true 일때 , 일반화하자면 처음 나오는 falsy 값을 반환 ,만약 둘다 truthy 라면 마지막 값 반환 
||  

const me ={
    name: "배정빈",
    age: 24,
    gender : 'female',
};
const someone ={
    name:"유예빈",
    age:26,
    gender:"male",
};

function addMilitaryStateIfMale(person){
    if(person.gender === 'male'){
        person.militaryState = false;
    }
}

addMilitaryStateIfMale(me);
addMilitaryStateIfMale(someone);

console.log(me);
console.log(someone);

function parseBoolean(value){
    if(value === true ){
        return "참";
    }
    else if( value === false){
        return "거짓";
    }
}
/* if (me.militaryState !== undefined){
    console.log(parseBoolean(me.militaryState));
}
if(someone.militaryState !== undefined){
    console.log(parseBoolean(someone.militaryState));
}
 위와 동일 
me.militaryState !== undefined&&console.log(parseBoolean(me.militaryState));
someone.militaryState !== undefined &&console.log(parseBoolean(someone.militaryState));
----------------------------------------------------------------------------------
*/
/*
||
const input = prompt();
if(input ===""){ // ==if(!input)
    console.log("입력 값이 없습니다");
}
else{
    console.log(input)
}
console.log(input || "입력값이 없습니다.");  앞에가 false 면 뒤가 출력 , 앞에가 true면 뒤가 출력 x 
*/

/*  비구조화 할당 , 구조분해 할당  

const me ={
    name:"유예빈",
    age:26,
};

const { name ,age } = me ;


console.log(name);

어떠한 객체의 키 값을 새로운 변수로 처리하고 싶을 때 

const a = obj.a;
const b = obj.b;

==
const { a , b} = obj ;

const a = arr[0];
const [a] =arr ;

const a = arr[0];
const b = arr[1];
==
const [a,b] =arr ;
---------------------------------------------------------- 
*/

/* 스프레드 ... , 객체나 배열 내용물을 뿌림
오브젝트는 오브젝트에만 배열은 배열에만   

const me ={
    name:"유예빈",
    age:26,
};

const militaryMe = {
    ...me, // me라는 객체 안의 내용을 흩뿌리겠다 
    militaryState: false,
}

const animals = ["개" ,"고양이"];
const anotheranimals = [...animals,"참새 "];
console.log(anotheranimals);
*/

/* 레스트 ( 나머지 ) , 나머지를 모두 모아 하나로 모음  */

const me ={
    name:"유예빈",
    age:26,
    militaryState: false,
};

const {militaryState, ...another} =me;

console.log(another);

const numbers = [0,1,2,3,4,5,6];

const [zero, ...rest] =numbers;

console.log(rest);

