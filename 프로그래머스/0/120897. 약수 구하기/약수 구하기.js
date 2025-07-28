function solution(n) {
    const answer = [];
    
    let pointer = 0;
    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) {
            answer.splice(pointer++, 0, i);
        } else if (n % i === 0) {
            answer.splice(pointer++, 0, i);
            answer.splice(pointer, 0, ~~(n / i));
        }
        console.log(answer, pointer)
    }
    return answer;
}