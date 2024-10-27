function solution(n, k) {    
    const service = Math.floor(n / 10);
    
    return (n * 12000) + ((k - service) * 2000);
}