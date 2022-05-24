/* DOM 이란  html, xml 문서의 프로그래밍 인터페이스 
        프로그래밍 언어가 dom 구조에 접근할 수 있는 방법을 제공하여 문서구조, 스타일 ,내용 등을 
        변경 할 수 있게 해준다. 
        */
       /* 브라우저의 렌더링 과정 
       HTML 파싱 : 구문 해석 , 브라우저 요청을 보내서 서버에서 응답한 html문서는 문자열로 이루어진 
       순수 텍스트 형태 , 서버는 html 파일 메모리에 저장하고 바이트를 응답함 , 
       문법적 의미를 갖는 코드의 최소 단위는 토큰 , 노드는 dom 을 구성하는 가장 기본 요소 
       HTML는 부모와 자식관계를 형성, tree 자료 구조를 DOM 
       DOM 은 HTML 파싱의 결과물이라고 할 수 있음 .
       DOM API를 통해 HTML 문서를 동적으로 조작함. 
       요소 노드를 취득해야 조작가능   
       */
      /* document.getElementById('id값'); id를 이용한 요소 획득 
      */

document.getElementById('lion').style.color="red";
document.getElementById('tiger').style.color="blue";
document.getElementById('baer').style.color="green";

/*document.getElementsByTagName('태그이름');
    인수에 들어있는 태그 이름을 갖는 모든 요소 노드들을 탐색하여 반환 
    HTMLCollection 객체 반환 */ 

const animal = document.getElementsByTagName("li")[3];
animal.style.color="red"

/*document.getElementsByClassName('class 값');
    인수로 전달한 클래스 값을 갖는 모든 요소 노드들을 탐새하여 반환 
    HTMLCollection 객체 반환  */

document.getElementsByClassName('animal')[1].style.color="red";

/*document.querySelector('css선택자');
  document.querySelectorAll('css선택자'); */
document.querySelectorAll('.animal')[0].style.color="blue";

/*DOM 조작 , 돔의 새로운 노드 추가하거나 기존 노드 삭제 
innerHTML 요소 노드의 자식 노드가 삭제되고 새로운 노드가 파싱 됨 */
document.querySelectorAll(".animal")[2].innerHTML="Dog";
const animals = document.getElementById("animals");

animals.innerHTML += "<li class = 'animal'>Cat</li>"

document.querySelectorAll(".box")[0].classList.add("purple");
document.querySelectorAll(".box")[0].classList.remove("purple");

/* 토글 전원버튼 클래스가 존재하지 않는다면 추가 있으면 사라짐 */
document.querySelectorAll(".box")[0].classList.toggle("yellow");
document.querySelectorAll(".box")[0].classList.toggle("yellow");