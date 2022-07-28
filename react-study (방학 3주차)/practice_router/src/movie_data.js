// 파일을 못찾아서 직접 입력했습니다아.. 텍스트는 일정부분 스킵했습니다아

let movies = [
    {
        id: 1,
        title: "하울의 움직이는 성",
        director: "미야자키 하야오",
        category: "일본 애니메이션",
        detail:
            "아버지가 물려주신 모자 기계를..."
    },
    {
        id: 2,
        title: "보스 베이비2",
        director: "톰 맥그라스",
        category: "미국 애니메이션",
        detail:
            "각자의 삶을 살아가던 두 형제..."
    },
    {
        id: 3,
        title: "너의 이름은",
        director: "신카이 마코토",
        category: "일본 애니메이션",
        detail:
            "도코의 잘생긴 남자로 살아볼 순 없을까..."
    },
    {
        id: 4,
        title: "아이 필 프리티",
        director: "마크 실버스틴",
        category: "미국 영화",
        detail:
            "난 왜 예쁘지 않은 걸까..."
    },
    {
        id: 5,
        title: "트루먼쇼",
        director: "피터 위어",
        category: "미국 영화",
        detail:
            "한 사람의 일거수일투족이 24시간..."
    },
    {
        id: 6,
        title: "아메리칸셰프",
        director: "존 패브로",
        category: "미국 영화",
        detail:
            "창의력이 지글지글 끓어오르는 셰프..."
    },
    {
        id: 7,
        title: "인턴",
        director: "낸시 마이어스",
        category: "미국 영화",
        detail:
            "뜨거운 열정으로 단기간에 회사를..."
    },
    {
        id: 8,
        title: "월요일이 사라졌다",
        director: "토미 비르콜리",
        category: "미국 영화",
        detail:
            "우리는 하나다!..."
    },
];

export function getMovies(){
    return movies;
}

export function getMovie(id){
    return movies.find((movie) => movie.id === id);
}