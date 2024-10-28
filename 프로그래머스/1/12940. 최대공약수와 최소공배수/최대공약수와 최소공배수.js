function solution(n, m) {
    const gcd = (a, b) => {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    
    const lcm = (a, b) => {
        return (a * b) / gcd(a, b);
    }
    
    return [gcd(n, m), lcm(n, m)];
}