function solution(common) {
    const [a, b, c] = common.slice(0, 3);
    const last_idx = common.length - 1;
    const diff1 = b - a;
    const diff2 = c - b;
    
    return diff1 === diff2 ? common[last_idx] + diff1 : common[last_idx] * (b / a); 
}