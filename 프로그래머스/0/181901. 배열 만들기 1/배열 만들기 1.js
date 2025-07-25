function solution(n, k) {
    let answer = [];
    
    let i = 1;
    while (i * k <= n) {
        answer.push(i * k);
        i++;
    }
    
    return answer;
}