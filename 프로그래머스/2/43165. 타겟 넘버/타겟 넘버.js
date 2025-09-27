function solution(numbers, target) {
    // 타겟과 일치하는 결과수 저장
    let count = {};
    
    // 모든 조합을 만들어서 결과를 비교하기 위함
    function dfs(index, total) {
        // breakpoint
        if (index === numbers.length) {
            count[total] = (count[total] || 0) + 1;
            return;
        }
        
        // 덧셈
        dfs(index + 1, total + numbers[index]);
        // 뺄셈
        dfs(index + 1, total - numbers[index]);
    }
    
    dfs(0, 0);

    // 몇개의 합을 만들 수 있는 문제였다면 count의 길이: Object.keys(count).length
    
    return count[target];
}