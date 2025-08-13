function solution(A, B) {
    let count = -1;
    let copy = [...A];
    for (let i = 0; i < 100; i++) {
        if (copy.join("") === B) return i;
        const last_char = copy.pop();
        copy.unshift(last_char);
    }
    
    return count;
}