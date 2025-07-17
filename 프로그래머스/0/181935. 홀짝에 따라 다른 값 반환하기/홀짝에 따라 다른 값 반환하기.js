function solution(n) {
    const arr = Array(n).fill(0).map((_, i) => i + 1);
    let answer = 0;
    
    if (n % 2 !== 0) {
        answer = arr.filter(val => val % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
    } else {
        answer = arr.filter(val => val % 2 === 0).reduce((acc, curr) => acc + curr * curr, 0)
    }
    
    return answer;
}