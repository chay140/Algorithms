function solution(x, n) {
    let answer = [];
    for (let i = 0; i < n; i++) {
        const temp = x * (i + 1);
        answer.push(temp);
    }
    return answer;
}