function solution(i, j, k) {
    let answer = 0;
    
    for (let a = i; a <= j; a++) {
        if (String(a).includes(String(k))) {
            answer += String(a).split(String(k)).length - 1;
        };
    }
    
    return answer;
}