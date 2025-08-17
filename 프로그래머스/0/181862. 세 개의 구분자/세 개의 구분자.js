function solution(myStr) {
    const answer = myStr.split(/[abc]+/).filter(str => str !== "");
    
    if (answer.length === 0) return ["EMPTY"];
    
    return answer;
}