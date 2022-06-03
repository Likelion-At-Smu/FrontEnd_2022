const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
//main과 qna, result 에 querySelector를 통해서 섹션 설정

const endPoint = 10;
//진척도 표시 위한 endpoint 설정

const select = [0,0,0,0];
//결과계산위해 list 제작

//addanswer 함수 제작
function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector(".aBox");
    var answer = document.createElement('button');

    //답변버튼에 클래스 추가
    answer.classList.add('answerList');
    answer.classList.add('my-5');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    //애니메이션 추가
    answer.classList.add('fadeIn');
    //answer이 a에 소속될 수 있도록 함
    a.appendChild(answer);
    answer.innerHTML = answerText;
    //버튼 불러오기 

    //answer의 클릭 속성에 addEventListner
    answer.addEventListener("click",function(){
        var children = document.querySelectorAll('.answerList'); //버튼 세개 모두 선택
        for(let i=0;i<children.length;i++){
            children[i].disabled = true; //버튼 비활성화

            children[i].style.WebkitAnimation = "fadeOut 0.5s"
            children[i].style.animation = "fadeOut 0.5s"
            //버튼 사라지는 애니메이션 주기
        }
        setTimeout(()=>{
            //버튼이 사라질 때 자연스럽게 해주기 위해 settimeout함수제작

            var target = qnaList[qIdx].a[idx].type; //qnalist의 타입

            for(let i=0;i<target.length;i++){ //select리스트에 타입 추가
                select[target[i]]+=1 
            }

            for(let i=0;i<children.length;i++){
                children[i].style.display = 'none'; //버튼 display none으로
            }
            goNext(++qIdx);
        },450)
    },false)
}

function calResult(){ //전개 구문 활용
    var result = select.indexOf(Math.max(...select)); //배열 안에 제일 높은 값 가져오기
    return result; 

}
function setResult(){
    let point = calResult();
    
    const resultNameIntro = document.querySelector('.resultIntro');
    resultNameIntro.innerHTML = infoList[point].nameIntro; 
    //resultnameintro의 data가져오기

    const resultName = document.querySelector('.resultName');
    resultName.innerHTML = infoList[point].name;
    //resultname의 data가져오기

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

function goResult(){ //start와 비슷한 구조의 함수
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

//다음으로 이동하는 goNext함수 제작
function goNext(qIdx){
    if(qIdx == endPoint){ //qindx가 10이면 결과 화면으로
        goResult();
        return;
    }

    var q = document.querySelector('.qBox');
    q.innerHTML = qnaList[qIdx].q;
    //qbox의 innerHTML은 qnaList[i].q 출력  
    
    //gonext후 계속 호출해주기 위해 반복문 사용
    for(let i in qnaList[qIdx].a)
    {
        addAnswer(qnaList[qIdx].a[i].answer,qIdx,i); //addAnswer함수 사용
    }

    //현재진척도 숫자로 표시하기
    var countStatusNum = document.querySelector('.countStatus');
    countStatusNum.innerHTML = (qIdx+1)+"/"+endPoint;
    //상태바 제작하기 !
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
        //자연스러운 애니메이션 효과를 통해 timeout함수 설정

        let qIdx = 0; //질문의 인덱스값 0
        goNext(qIdx);
    },450);
}