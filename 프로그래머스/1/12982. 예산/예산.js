function solution(d, budget) {
    let answer = 0;
    // 낮은 것부터 빼주기 위해 오름차순 정렬
    d.sort((a, b) => a - b);
    
    // 낮은 예산부터 총 금액에서 빼서 지원할 수 있는 수 찾기
    for (let i = 0; i < d.length; i++) {
        budget -= d[i];
        if (budget >= 0) {
            answer += 1;
        } else {
            break;
        }
    }
    return answer;
}