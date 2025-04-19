function solution(numbers, target) {
    let answer = 0;
    
    const dfs = (index, sum) => {
        // 재귀 탈출 조건
        // index 가 numbers.length와 일치
        if (index === numbers.length) {
            // 탈출할때 target 달성 여부 체크
            if (sum === target) answer++;
            return;
        }
        // +numbers[index] 혹은 -numbers[index];
        // 수행 동작
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    
    return answer;
}