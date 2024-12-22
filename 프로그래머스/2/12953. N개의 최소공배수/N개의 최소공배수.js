function solution(arr) {
    
    if (arr.length === 1) return arr[0];
    
    let answer = arr[0];
    
    const gcd = (a, b) => a % b ? gcd(b, a % b) : b;
    const lcm = (a, b) => a * b / gcd(a, b);
    
    for (let i = 1; i < arr.length; i++) {
        answer = lcm(answer, arr[i]);
    }
    
    return answer;
}