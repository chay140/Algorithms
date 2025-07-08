function solution(numbers, target) {
    let count = 0;
    
    const dfs = (depth, sum) => {
        // 탈출 조건
        if (depth === numbers.length) {
            // 타겟 넘버를 찾은 경우
            if (sum === target) count++;
            return;
        }
        
        // +/- 재귀 수행
        dfs(depth + 1, sum + numbers[depth]);
        dfs(depth + 1, sum - numbers[depth]);
    }
    
    // 그래프 돌기 전 depth = 0, sum = 0
    dfs(0, 0);
    
    return count;
}