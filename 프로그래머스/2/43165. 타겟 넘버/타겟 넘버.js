function solution(numbers, target) {
    let count = 0;
    
    // 반복 DFS (Stack 사용)
    let stack = [{ index: 0, sum: 0 }];
    
    // 방문해야할 노드가 없다면 탈출
    while (stack.length) {
        const { index, sum } = stack.pop();
        
        // 타겟 넘버를 발견한 경우
        if (index === numbers.length) {
            if (sum === target) count++;
            continue;       // 다음 후보 경로로 넘어가기
        }
        
        stack.push({ index: index + 1, sum: sum + numbers[index] });
        stack.push({ index: index + 1, sum: sum - numbers[index] });
    }
    
    return count;
}