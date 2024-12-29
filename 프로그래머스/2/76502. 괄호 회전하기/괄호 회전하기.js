function solution(s) {
    let stack = [];
    let answer = 0;
    let isCorrect = true;
    
    if (s.length % 2 === 1) return answer;
    
    for (let i = 0; i < s.length; i++) {
        const str = s.slice(i) + s.slice(0, i);     // 회전하는 문자열
        isCorrect = true;
        
        // 매 문자열마다 올바른 괄호가 있는지 없는지 확인
        for (let char of str) {
            if (char === '(' || char === '[' || char === '{') {
                stack.push(char);
            } else {
                const last = stack.pop();
                
                // 마지막 요소와 비교
                if (last === "(" && char === ")") continue;
                if (last === "[" && char === "]") continue;
                if (last === "{" && char === "}") continue;
                
                // 맞는 것이 없다면 isCorrect는 false로
                isCorrect = false;
                break;
            };
        };
        if (isCorrect) answer++;
    };
    return answer;
}