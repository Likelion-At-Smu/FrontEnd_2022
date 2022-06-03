const APIKEY ="5e5de78299245123f0ae1aa28073f1f6";
const IMAGE_URL="https://image.tmdb.org/t/p/w500/"

const options={
    method:'GET',
    headers:{
        'Content-Type':'application/json; charset=utf-8'
    }
};

const now_playing=document.getElementById("now-playing");
const now_playingURL="https://api.themoviedb.org/3/movie/now_playing?api_key="+APIKEY+"&language=en-US&page=1";
fetch(now_playingURL ,options)
    .then(response=>response.json())
    .then(response=>{
        response.results.forEach((element)=>{
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText= element.title;
            let rate=document.createElement("img");
            rate.innerText="★"+element.vote_average;
            
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            now_playing.appendChild(movie);

        }) //js데이터로 html을 만들고 있는 작업
            
        

    });

const popular=document.getElementById("popular");
const popularURL="https://api.themoviedb.org/3/movie/popular?api_key="+APIKEY+"&language=en-US&page=1";
fetch(popularURL ,options)
    .then(response=>response.json())
    .then(response=>{
        response.results.forEach((element)=>{
            console.log(element.backdrop_path);
            console.log(element.title);
            console.log(element.vote_average);

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText= element.title;
            let rate=document.createElement("img");
            rate.innerText="★"+element.vote_average;
            
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            movie.appendChild(moviediv);
            popular.appendChild(movie);

        }) //js데이터로 html을 만들고 있는 작업
            
        

    });

    const top_rated=document.getElementById("top_rated");
    const top_ratedURL="https://api.themoviedb.org/3/movie/top_rated?api_key="+APIKEY+"&language=en-US&page=1";
    fetch(top_ratedURL ,options)
        .then(response=>response.json())
        .then(response=>{
            response.results.forEach((element)=>{
                console.log(element.backdrop_path);
                console.log(element.title);
                console.log(element.vote_average);
    
                let movie = document.createElement("li");
                let moviediv = document.createElement("div");
                let backdrop = document.createElement("img");
                backdrop.setAttribute("src",IMAGE_URL+element.backdrop_path);
                let title = document.createElement("h4");
                title.innerText= element.title;
                let rate=document.createElement("img");
                rate.innerText="★"+element.vote_average;
                
                moviediv.appendChild(backdrop);
                moviediv.appendChild(title);
                moviediv.appendChild(rate);
                movie.appendChild(moviediv);
                top_rated.appendChild(movie);
    
            }) //js데이터로 html을 만들고 있는 작업
                
            
    
        });
