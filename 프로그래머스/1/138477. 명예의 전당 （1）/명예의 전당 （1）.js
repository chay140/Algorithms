function solution(k, score) {
    let answer = [];
    
    let top_k = [];
    for (let i = 0; i < score.length; i++) {        
        if (top_k.length < k || score[i] > top_k[top_k.length - 1]) {
            if (top_k.length === k) {
                top_k.pop();
            }
            top_k.push(score[i]);
            top_k.sort((a,b) => b-a);
        }
        
        // k번째 높은 점수
        answer.push(top_k[top_k.length - 1]);
    }
    
    return answer;
}