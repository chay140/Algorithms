function solution(before, after) {
    const b_map = new Map();
    const a_map = new Map();
    
    for (let i = 0; i < before.length; i++) {
        b_map.set(before[i], (b_map.get(before[i]) || 0) + 1);
        a_map.set(after[i], (a_map.get(after[i]) || 0) + 1);
    }
    
    let answer = 1;
    b_map.forEach((val, key) => {
        if (a_map.get(key) !== val) answer = 0;
    });
    
    return answer;
}