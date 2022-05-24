/* 이벤트 객체 
이벤트 핸들러의 첫 번째 인수로 전달됨 
function showwhere(e) e <- 첫번째 인수로 전달  */

document.querySelectorAll('.list')[0].addEventListener("click",function(e){
    tabBtn(e.target.dataset.id);

})

function tabBtn(a){
    document.querySelectorAll('.tab-button')[0].addEventListener("click",function(){
        for( let i =0; i<document.querySelectorAll(".tab-button").length;i++){
        document.querySelectorAll('.tab-button')[i].classList.add('here');
        document.querySelectorAll('.tab-content')[i].classList.add('show');
        }
        document.querySelectorAll('.tab-button')[a].classList.add('here');
        document.querySelectorAll('.tab-content')[a].classList.add('show');
    });
}

/* 
Scroll 이벤트  window.addEventListener('scroll',function(){});
스크롤 바를 조작하면 발생하는 이벤트  */

