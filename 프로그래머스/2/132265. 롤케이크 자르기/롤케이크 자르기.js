function solution(topping) {
    let count = 0;
    const rightMap = new Map();
    const leftMap = new Map();
    
    // rightMap에 우선 모든 토핑 정보 추가: O(n) [n: topping의 길이]
    for (const type of topping) {
        rightMap.set(type, (rightMap.get(type) || 0) + 1);
    }
    
    // leftMap에 토핑을 추가하며 rightMap의 정보 변경
    for (const type of topping) {
        leftMap.set(type, (leftMap.get(type) || 0) + 1);
        // 왼쪽 케이크에 하나 추가한 만큼 오른쪽 케이크에서 토핑 개수 변경
        if (rightMap.get(type) <= 1) rightMap.delete(type);
        else rightMap.set(type, rightMap.get(type) - 1);
        
        // 어느 시점의 토핑 가짓수가 동일하다면 count 증가
        if (leftMap.size === rightMap.size) count++;
    }
    
    
    return count;
}