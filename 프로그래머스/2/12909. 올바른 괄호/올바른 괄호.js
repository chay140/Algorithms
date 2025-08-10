function solution(s){
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        // stack에 추가
        stack.push(s[i]);
        
        if (stack.at(-1) === '\)' && stack.at(-2) === '\(') {
            stack.pop();
            stack.pop();
        }
    }
    return stack.length === 0;
}