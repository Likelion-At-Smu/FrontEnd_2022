/* 어떤 사건을 발생 시키는 것
마우스를 클릭하거나 , 스크롤하거나 
함수 호출되는데 이벤트 핸들러라고 함 
이벤트와 이벤트 핸들러를 통해 함수 제어 
이벤트 타입은 이벤트의 종류를 나타내는 문자열 
마우스 이벤트 : 클릭은 마우스 버튼을 클릭 
이벤트 핸들러 등록 방법 
EventTarget.addEventListener('eventType(이벤트타입)',function(이벤트 핸들러),useCapture(이벤트 캡쳐 사용여부)); */

/* document.getElementById("btn").addEventListener("click",function (){
    console.log("click!!!!!!!!");
}); */

/* var num = 0;
document.getElementById('plus').addEventListener("click",function(){
    num++;
    document.getElementById("num").innerHTML= num;
});
document.getElementById('minus').addEventListener("click",function(){
    num--;
    document.getElementById("num").innerHTML= num;
}); */

document.querySelector('.bar').addEventListener("click",function(){
    document.querySelector(".bar").innerHTML ="눌렀어";
    document.querySelector('.newbar').classList.toggle("show");
})
