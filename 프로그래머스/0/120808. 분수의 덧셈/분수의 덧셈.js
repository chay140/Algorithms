function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    
    const findGCD = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a
    }
    
    const gcd = findGCD(numer, denom);
    
    return [numer / gcd, denom / gcd];
}