function solution(survey, choices) {
    let answer = '';
    let scores = {R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0};
    
    for (let i = 0; i < survey.length; i++) {
        let choice_score = choices[i] - 4;
        const [type1, type2] = survey[i].split('');
        
        if (choice_score < 0) {
            scores[type1] += Math.abs(choice_score);
        } else if (choice_score > 0) {
            scores[type2] += Math.abs(choice_score);
        }
    }
    
    // 점수 계산
    answer += (scores['R'] >= scores['T']) ? 'R' : 'T';
    answer += (scores['C'] >= scores['F']) ? 'C' : 'F';
    answer += (scores['J'] >= scores['M']) ? 'J' : 'M';
    answer += (scores['A'] >= scores['N']) ? 'A' : 'N';
    
    return answer;
}