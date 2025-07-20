function solution(my_string, n) {
    let answer = '';
    
    for (const c of my_string) {
        answer += c.repeat(n);
    }
    
    return answer;
}