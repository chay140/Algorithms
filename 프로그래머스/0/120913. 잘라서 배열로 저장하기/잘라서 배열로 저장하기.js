function solution(my_str, n) {
    const answer = [];
    
    let idx = 0;
    while (idx < my_str.length) {
        answer.push(my_str.substring(idx, idx + n));
        
        idx += n;
    }
    
    return answer;
}