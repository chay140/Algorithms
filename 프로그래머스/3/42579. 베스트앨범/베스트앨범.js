function solution(genres, plays) {
    let answer = [];
    
    // 데이터 해시
    let totalPlay = new Map();
    let genreList = {};
    
    for (let i = 0; i < genres.length; i++) {
        totalPlay.set(genres[i], (totalPlay.get(genres[i]) || 0) + plays[i]);
        genreList[genres[i]] ? genreList[genres[i]].push([i, plays[i]]) : genreList[genres[i]] = [[i, plays[i]]];
    }
    
    // 데이터 정렬
    const sortedTotalPlay = new Map([...totalPlay.entries()].sort((a, b) => b[1] - a[1]));
    
    for (let value of Object.values(genreList)) {
        value.sort((a, b) => b[1] - a[1]);
    }
    
    for (let genre of sortedTotalPlay.keys()) {
        answer.push(genreList[genre][0][0]);
        if (genreList[genre][1]) answer.push(genreList[genre][1][0]);
    }
    
    return answer;
}