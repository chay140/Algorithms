function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    
    let gcd = 1;
    // 최대 공약수찾기
    for (let i = 2; i <= Math.min(denom, numer); i++) {
        if (denom % i === 0 && numer % i === 0) {
            gcd = i;
        }
    }
    
    return [numer / gcd, denom / gcd];
    
}