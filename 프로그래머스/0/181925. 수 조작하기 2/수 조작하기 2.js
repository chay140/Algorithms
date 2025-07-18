function solution(numLog) {
    const operations = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    }
    let answer = "";
    
    let prev = numLog[0];
    for (let i = 1; i < numLog.length; i++) {
        const curr = numLog[i];
        
        const diff = String(numLog[i] - prev);
        answer += operations[diff];
        
        prev = curr;
    }
    
    return answer;
}