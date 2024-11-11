function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        const remainder = n % a;
        n = Math.floor(n / a) * b;
        answer += n;
        
        if (remainder !== 0) {
            n += remainder;
        }
    }
      
    return answer;
}