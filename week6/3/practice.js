// document.querySelectorAll(".tab-button")[0]
//     .addEventListener("click", function() {
//         for (let i=0; i<document.querySelectorAll(".tab-button").length; i++) {
//             document.querySelectorAll(".tab-button")[i].classList.remove("here");
//             document.querySelectorAll(".tab-content")[i].classList.remove("show");
//         }
//         document.querySelectorAll(".tab-button")[0].classList.add("here");
//         document.querySelectorAll(".tab-content")[0].classList.add("show");
//     })

document.querySelectorAll(".list")[0]
     .addEventListener("click", function(e) {});

function tabBtn(a) {
    document
    .querySelectorAll(".tab-button")
    [a].addEventListener("click", fuction() {
        for (
            let i = 0; 
            i < document.querySelectorAll(".tab-button").length; 
            i++
        ) {
            document.querySelectorAll(".tab-button")[i].classList.remove("here");
            document.querySelectorAll(".tab-content")[i].classList.remove("show");
        }
        document.querySelectorAll(".tab-button")[0].classList.add("here");
        document.querySelectorAll(".tab-content")[0].classList.add("show");
    });
}