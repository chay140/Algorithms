function solution(k, tangerine) {
    const tangerineMap = {};
    
    tangerine.forEach((t) => tangerineMap[t] !== undefined ? tangerineMap[t] += 1 : tangerineMap[t] = 1)
    
    // 가장 많은 중복 개수로 정렬
    const sorted = Object.values(tangerineMap).sort((a, b) => b - a);

    let answer = 0;
    for (const value of sorted) {
        answer++;
        if (k > value) k-= value;
        else break;
    }
    
    return answer;
}