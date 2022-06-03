const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 10;
const select = [0,0,0,0];

function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');
    
    //답변마다 클래스를 추가하기
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    
    //버튼에 애니메이션 추가하기
    answer.classList.add('fadeIn');

    //답변이 a에 원소가 되게하기
    a.appendChild(answer);

    answer.innerHTML = answerText;

    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList'); //버튼 3개 선택
        for(let i=0;i<children.length;i++){
            children[i].disabled = true; //버튼 비활성화하기

            //버튼이 사라지는 애니메이션
            children[i].style.WebkitAnimation = "fadeOut 0.5s"
            children[i].style.animation = "fadeOut 0.5s"
        }
        //사라지는 순간 바로 none이 되면 안되니깐 setTimeout 함수 제작
        setTimeout(()=>{

            var target = qnaList[qIdx].a[idx].type;

            for(let i=0;i<target.length;i++){
                select[target[i]]+=1 //[x,x,x,x]에서 가장 높은 x를 찾기 위한 for문
            }

            for(let i=0;i<children.length;i++){
                children[i].style.display = 'none';
            }
            goNext(++qIdx);
        },450)
    },false)
}

function calResult(){ 
    var result = select.indexOf(Math.max(...select));//...전개구문
    //최댓값을 가진 인덱스를 반환해준다. 즉 4가지 결과 중에 가장 높은 값을 반환
    return result; 

}
function setResult(){
    let point = calResult(); //point result값 담기
    //밑의 함수들은 이 point에 기반하여 동작한다.
    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = infoList[point].nameIntro; 

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;

    var resultImg = document.createElement('img');
    const imgDiv = document.querySelector("#resultImg");
    var imgURL = 'img/image-' + point + '.png';

    resultImg.src = imgURL;
    resultImg.alt = point;
    resultImg.classList.add('img-fluid');
    imgDiv.appendChild(resultImg);
    
    const resultDesc1 = document.querySelector('.resultDesc1');
    const resultDescTitle1 = document.querySelector('.resultDescTitle1');
    resultDescTitle1.innerHTML = infoList[point].descTitle1;
    resultDesc1.innerHTML = infoList[point].desc1;
  
    const resultDesc2 = document.querySelector('.resultDesc2');
    const resultDescTitle2 = document.querySelector('.resultDescTitle2');
    resultDescTitle2.innerHTML = infoList[point].descTitle2;
    resultDesc2.innerHTML = infoList[point].desc2;
}

function goResult(){ //결과로가기, goNext함수와 유사하고 앞에만 수정하면 나온다.
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.animation = "fadeIn 1s";
        setTimeout(() => {
            qna.style.display = "none";
            result.style.display = "block";            
        }, 450);
    },450);

    setResult();
}

function goNext(qIdx){ //질문이 다 끝났을 때 결과로 이동하는 함수
    if(qIdx == endPoint){
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    //q.innerHTML=qnaList[0].q
    q.innerHTML = qnaList[qIdx].q;
    //변수 도입하고, goNext함수 이후 또 호출
    //답변은 버튼으로 구현, 답변은 총 3개니까 3번 반복
    
    for(let i in qnaList[qIdx].a) //질문 더하는 함수
    {
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
    }
    //상태숫자 만들기
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;

    //상태바 만들기
    var status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint)*(qIdx+1)+"%"

}

function start(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.WebkitAnimation = "fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
        setTimeout(() => {
            main.style.display = "none";
            qna.style.display = "block";            
        }, 450);
        let qIdx = 0;
        goNext(qIdx);
    },450);
}