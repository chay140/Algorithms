function solution(s) {
    const splited = s.split(" ");
    const answer = [];
    
    for (const element of splited) {
        if (element !== 'Z') answer.push(element);
        else answer.pop();
    }
    
    return answer.reduce((acc, curr) => acc + Number(curr), 0);
}