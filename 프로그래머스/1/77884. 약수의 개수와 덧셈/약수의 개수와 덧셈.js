function solution(left, right) {
    let answer = 0;
    
    for (let i = left; i <= right; i++) {
        let temp = 0;
        // 약수 구하는 로직
        let j = 1;
        while (j <= i/2) {
            if (i % j === 0) temp += 1;
            j++;
        }
        temp += 1;
        
        // 짝/홀 판별
        answer += (temp % 2 === 0) ? i : -i;
    }
    
    return answer;
}