let movies =[
    {
        id: 1,
        title: "하울의 움직이는 성",
        director: "미야자키 하야오",
        category: "일본 애니메이션",
        detail: "아버지가 물려준 모자 기계를 지키는 수수한 소녀 소피" ,
    },
    {
        id: 2,
        title: "보스베이비",
        director: "미야자키 하야오",
        category: "일본 애니메이션",
        detail: "아버지가 물려준 모자 기계를 지키는 수수한 소녀 소피" ,
    },
];

export function getMovies() {
    return movies;
}

export function getMovie(id){
    return movies.find((movie) => movie.id ===id);
}