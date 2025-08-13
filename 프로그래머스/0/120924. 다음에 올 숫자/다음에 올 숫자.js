function solution(common) {
    const [a, b, c] = common.slice(0, 3);    
    return b - a === c - b ? common.pop() + (b - a) : common.pop() * (b / a); 
}