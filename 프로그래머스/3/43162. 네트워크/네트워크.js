function solution(n, computers) {
    let answer = 0;
    let visited = new Set() // 탐색을 마친 노드들

    function dfs (start) {
        visited.add(start);
        
        for (const neighbor in computers) {
            if (!visited.has(neighbor) && computers[start][neighbor] > 0) {
                dfs(neighbor);
            }
        }
    }
    
    for (const i in computers) {
        if (!visited.has(i)) {
            answer++;
            dfs(i)
        }
    }
    
    return answer;
}