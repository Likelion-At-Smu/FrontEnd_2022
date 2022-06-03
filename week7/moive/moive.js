const APIKEY = "33d299bffbe349387576696d16b715ee";
const IMAGE_URL="https://image.tmdb.org/t/p/w500/";

option={
    method:"GET",
    header:{
        'Content-Type':'application/json; charset=utf-8'
    }
}

//첫번째 인자는 url. fetch는 시간이 걸리므로 기다렷다가 값을 가지고와야함.
const now_playingURL="https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1";
const now_playing=document.getElementById("now-playing");
fetch(now_playingURL,option)
     .then(response=>response.json())
     .then(response=>{
         response.results.forEach((element)=>{
             console.log(element.backdrop_path); 
             console.log(element.title);  
             console.log(element.vote_average);
             //element의 이미지 주소, 타이틀, 평점 순서대로 console.log에 출력

             let movie = document.createElement("li"); //movie요소
             let moviediv = document.createElement("div"); //moviediv 
             let backdrop = document.createElement("img"); //이미지-백드롭
             backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path); //이미지 링크 +백드롭path
             //이미지 path지정

             let title = document.createElement("h4");
             title.innerText=element.title; 
             //타이틀 html에 
             let rate=document.createElement("span")
             rate.innerText="*"+element.vote_average;
            //평점 span에

             moviediv.appendChild(backdrop);
             moviediv.appendChild(title);
             moviediv.appendChild(moviediv);
             //moviediv에 append
             now_playing.appendChild(movie);
             //movie를 nowplaying에 append

         })


    });

const popularURL="https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1";
const popular=document.getElementById("popular");
fetch(popularURL,option)
     .then(response=>response.json())
     .then(response=>{
         response.results.forEach((element)=>{
             console.log(element.backdrop_path); 
             console.log(element.title);  
             console.log(element.vote_average);

             let movie = document.createElement("li");
             let moviediv = document.createElement("div");
             let backdrop = document.createElement("img");
             backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path); //이미지 링크 +백드롭path
             let title = document.createElement("h4");
             title.innerText=element.title;
             let rate=document.createElement("span")
             rate.innerText="*"+element.vote_average;
             moviediv.appendChild(backdrop);
             moviediv.appendChild(title);
             moviediv.appendChild(moviediv);
             popular.appendChild(movie);
         })


    });

const top_ratedURL="https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1";
const top_rated=document.getElementById("top-rated");
fetch(top_ratedURL,option)
     .then(response=>response.json())
     .then(response=>{
         response.results.forEach((element)=>{
             console.log(element.backdrop_path); 
             console.log(element.title);  
             console.log(element.vote_average);

             let movie = document.createElement("li");
             let moviediv = document.createElement("div");
             let backdrop = document.createElement("img");
             backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path); //이미지 링크 +백드롭path
             let title = document.createElement("h4");
             title.innerText=element.title;  
             let rate=document.createElement("span")
             rate.innerText="*"+element.vote_average;
             moviediv.appendChild(backdrop);
             moviediv.appendChild(title);
             moviediv.appendChild(moviediv);
             top_rated.appendChild(movie);
         })


    });
const up_commingURL="https://api.themoviedb.org/3/movie/up_comming?api_key="+APIKEY+"&language=en-US&page=1";
const up_comming=document.getElementById("up-comming");
    fetch(up_commingURL,option)
         .then(response=>response.json())
         .then(response=>{
             response.results.forEach((element)=>{
                 console.log(element.backdrop_path); 
                 console.log(element.title); 
                 console.log(element.vote_average);

                 let movie = document.createElement("li");
                 let moviediv = document.createElement("div");
                 let backdrop = document.createElement("img");
                 backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path); //이미지 링크 +백드롭path
                 let title = document.createElement("h4");
                 title.innerText=element.title; 
                 let rate=document.createElement("span")
                 rate.innerText="*"+element.vote_average;
                 moviediv.appendChild(backdrop);
                 moviediv.appendChild(title);
                 moviediv.appendChild(moviediv);
                 up_comming.appendChild(movie);
             })


        });

