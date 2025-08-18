function solution(numbers, target) {
    // 타겟과 일치하는 결과수 저장
    let count = 0;
    
    // 모든 조합을 만들어서 결과를 비교하기 위함
    function dfs(index, total) {
        // breakpoint
        if (index === numbers.length) {
            if (total === target) count++;
            return;
        }
        
        // 덧셈
        dfs(index + 1, total + numbers[index]);
        // 뺄셈
        dfs(index + 1, total - numbers[index]);
    }
    
    dfs(0, 0);
    
    return count;
}