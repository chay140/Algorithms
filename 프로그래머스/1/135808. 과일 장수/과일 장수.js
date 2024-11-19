function solution(k, m, score) {
    let answer = 0;
    
    score.sort((a,b) => b-a);
    
    // while (score.length >= m) {
    //     const box = score.splice(0, m);
    //     answer += (Math.min(...box) * m)
    // }
    
    score.filter((fruit, index) => {
        if ((index + 1) % m === 0) {
            answer += fruit * m
        }
    });
    
    
    return answer;
}