function solution(x) {
    // 자릿수의 합
    let temp = x;
    let divisor = 0;
    while (temp > 0) {
        divisor += temp % 10;
        temp = Math.floor(temp/10);
    }
    
    return x % divisor === 0;
}