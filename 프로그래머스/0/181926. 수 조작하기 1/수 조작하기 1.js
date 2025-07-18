function solution(n, control) {
    const operation = {
        "w": 1,
        "s": -1,
        "d": 10,
        "a": -10
    }
    
    return [...control].reduce((acc, curr) => acc + operation[curr], n);
}