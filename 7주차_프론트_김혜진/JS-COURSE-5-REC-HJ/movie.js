const APIKEY = "281a29f32a18a1e2f41e57171bacb122";              //내 API 키
const IMAGE_URL = "https://image.tmdb.org/t/p/w500"             //이미지 앞부분 URL

const option = {                                                //GET함수로 가져오기
    method: 'GET',
    Headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }

};

const now_playingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=281a29f32a18a1e2f41e57171bacb122&language=en-US&page=1";
const now_playing = document.getElementById("now-playing");
fetch(now_playingURL, option)                                   //자바스크립트로 HTML화면 꾸미기
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {

            let movie = document.createElement("li");           //각각 제목, 별점, 사진 들어갈 곳
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL+element.backdrop_path);      //이미지 앞부분 공통 URL이랑 개별 URL이어서 가져오기
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            
            movie.appendChild(moviediv);
            now_playing.appendChild(movie);

        })
    });
const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=281a29f32a18a1e2f41e57171bacb122&language=en-US&page=1";
const popular = document.getElementById("popular");
fetch(popularURL, option)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {


            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            
            movie.appendChild(moviediv);
            popular.appendChild(movie);

        })
    });
const top_ratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=281a29f32a18a1e2f41e57171bacb122&language=en-US&page=1";
const top_rated = document.getElementById("top_rated");
fetch(top_ratedURL, option)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {


            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            
            movie.appendChild(moviediv);
            top_rated.appendChild(movie);

        })
    });
const upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=281a29f32a18a1e2f41e57171bacb122&language=en-US&page=1";
const upcoming = document.getElementById("upcoming");
fetch(upcomingURL, option)
    .then(response => response.json())
    .then(response => {
        response.results.forEach(element => {

            let movie = document.createElement("li");
            let moviediv = document.createElement("div");
            let backdrop = document.createElement("img");
            backdrop.setAttribute("src", IMAGE_URL+element.backdrop_path);
            let title = document.createElement("h4");
            title.innerText = element.title;
            let rate = document.createElement("span");
            rate.innerText = "★" + element.vote_average;
            moviediv.appendChild(backdrop);
            moviediv.appendChild(title);
            moviediv.appendChild(rate);
            
            movie.appendChild(moviediv);
            upcoming.appendChild(movie);

        })
    });