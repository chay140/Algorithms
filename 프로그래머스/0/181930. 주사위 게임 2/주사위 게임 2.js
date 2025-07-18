function solution(a, b, c) {
    let set = new Set([a, b, c]);
    
    if (set.size === 3) return a + b + c;
    else if (set.size === 2) return (a + b + c) * (a * a + b * b + c * c);
    else if (set.size === 1) return (a + b + c) * (a * a + b * b + c * c) * (a * a * a + b * b * b + c * c * c); 
}