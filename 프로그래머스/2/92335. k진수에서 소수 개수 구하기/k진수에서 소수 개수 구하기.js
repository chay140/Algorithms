function solution(n, k) {
    const isPrime = (num) => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    const primes = []
    const converted = n.toString(k).split("0");
    for (const element of converted) {
        if (element === "") continue;
        if (isPrime(Number(element))) primes.push(element);
    }
    
    return primes.length;
}