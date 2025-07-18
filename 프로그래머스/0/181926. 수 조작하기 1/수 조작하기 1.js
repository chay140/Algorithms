function solution(n, control) {
    const operation = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10
    }
    
    for (const c of control) {
        n += operation[c];
    }
    
    return n;
}