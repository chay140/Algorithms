function solution(answers) {
    let scores = [0, 0, 0];
    
    const supo_1 = [1, 2, 3, 4, 5];
    const supo_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const supo_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === supo_1[i % supo_1.length]) {
            scores[0]++;
        }
        
        if (answers[i] === supo_2[i % supo_2.length]) {
            scores[1]++;
        }
        
        if (answers[i] === supo_3[i % supo_3.length]) {
            scores[2]++;
        }
    }
    
    // 가장 높은 점수
    const max_score = Math.max(...scores);
    let answer = [];
    scores.forEach((score, i) => {
        if (score === max_score) answer.push(i+1);
    });

    return answer;
}