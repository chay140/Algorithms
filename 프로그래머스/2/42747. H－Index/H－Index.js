function solution(citations) {
    let answer = 0;
    
    // 내림 차순 정렬
    citations.sort((a, b) => b - a);
    
    // h-index 찾기
    for (let i = 0; i < citations.length; i++) {
        if(citations[i] > i) answer++;
        else break;
    }
    
    return answer;
}