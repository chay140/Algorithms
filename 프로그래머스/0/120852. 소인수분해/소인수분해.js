function solution(n) {
    const prime_factors = new Set();
    
    while (n > 1) {
        let divider = 2;
        while (n % divider !== 0) divider++;
        prime_factors.add(divider);
        n /= divider;
    }
    return Array.from(prime_factors);
}