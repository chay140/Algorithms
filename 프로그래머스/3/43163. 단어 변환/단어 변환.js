function solution(begin, target, words) {    
    let answer = 0;
    const visited = { [begin] : 0 };
    const queue = [begin];
    
    
    // 변환 가능한 단어 확인
    function canTransform(a, b) {
        let count = 0;
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) count++;
        }
        // 철자 하나만 다를 때 true
        return count === 1 ? true : false;
    }
    
    // 최소 단계를 구하는 BFS 적합
    while (queue.length) {
        const curr = queue.shift();
        
        // 탈출 조건
        if (curr === target) break;
        
        for (let w of words) {
            // 유사하며 아직 방문하지 않은 node 찾아 depth 늘려주기
            if (canTransform(curr, w) && !visited[w]) {
                visited[w] = visited[curr] + 1;
                queue.push(w);
            }
        }
    }
    
    return visited[target] ? visited[target] : 0;
}