function solution(s) {
    let answer = [];
    let index_stack = {};
    
    for (let i = 0; i < s.length; i++) {
        if (Object.keys(index_stack).includes(s[i])) {
            answer.push(i - index_stack[s[i]]);
        } else {
            answer.push(-1);
        }
        index_stack[s[i]] = i;
    }
    
    return answer;
}