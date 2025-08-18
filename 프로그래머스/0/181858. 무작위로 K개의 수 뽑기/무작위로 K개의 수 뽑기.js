function solution(arr, k) {
    let answer = new Set(arr);
    
    answer = Array.from(answer).slice(0, k);
    
    if (answer.length < k) {
        const empty = k - answer.length;
        for (let _ = 0; _ < empty; _++) answer.push(-1);
    }
    
    return answer;
}