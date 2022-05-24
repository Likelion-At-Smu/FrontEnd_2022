// document.getElementById("lion").style.color = "red";
// document.getElementById("tiger").style.color = "blue";
// document.getElementById("bear").style.color = "green";

// const animal = document.getElementsByTagName("li");

// document.getElementsByTagName("li")[0].style.color = "red";

// document.getElementsByClassName("animal")[0].style.color = "red";
//document.querySelectorAll('.animal')[0].style.color = "red";

// document.querySelectorAll('.animal')[2].innerHTML = "dog";
// const animals = document.getElementById("animals");

// animals.innerHTML += "<li class = 'animal'>Cat</li>";

// document.querySelectorAll(".box")[0].classList.add("purple");
// document.querySelectorAll(".box")[0].classList.remove("purple");

// document.querySelectorAll(".box")[0].classList.toggle("yellow");

// document.getElementById("btn").addEventListener("click", function() {
//     console.log("click!");
// });

// var num = 0;
// document.getElementById("plus").addEventListener("click", function() {
//     num++;
//     document.getElementById("num").innerHTML = num;
// });

// document.getElementById("minus").addEventListener("click", function() {
//     num--;
//     document.getElementById("num").innerHTML = num;
// });

// document.querySelector(".bar").addEventListener("click", function() {
//     document.querySelector(".newBar").style.display = "block";   
// });

document.querySelector(".bar").addEventListener("click", function() {
    document.querySelector(".bar").innerHTML = "눌렸어!";
    document.querySelector(".newBar").classList.toggle("show");   
});
    