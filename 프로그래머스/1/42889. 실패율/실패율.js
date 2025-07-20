function solution(N, stages) {
    
    // 스테이지를 1 ~ N까지 돈다
    // 각 스테이지 도전자, 실패자 파악
    // 실패율 기록
    // 다음 스테이지의 도전자는 이전 스테이지의 실패자 수만큼 감소
    // 반복
    // 실패율 기준으로 정리 (내림차순)
    
    
    // O(n) (n = stage.length)
    const challenger_map = new Map();
    stages.forEach(stage => challenger_map.set(stage, (challenger_map.get(stage) || 0) + 1));
    
    // 실패율 계산
    let total_challengers = stages.length;
    let rates = [];
    for (let i = 0; i < N; i++) {
        rates.push(challenger_map.get(i + 1) / total_challengers || 0);
        total_challengers -= challenger_map.get(i + 1) || 0;
    }
    
    // O(n log n)
    const sorted_rates = rates.map((val, idx) => ({stage: idx + 1, val})).sort((a, b) => b.val - a.val);

    return sorted_rates.map((val) => val["stage"]);
}