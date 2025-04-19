function solution(n, computers) {
    let answer = 0;
    let visited = []; // 탐색을 마친 노드들

    const BFS = (startNode) => {
        let needVisit = []; // 탐색해야할 노드들
        visited[startNode] = true;
        needVisit.push(startNode);

        while (needVisit.length !== 0) {
            const currNode = needVisit.shift(); // 가장 오래 남아있던 정점을 뽑아냄.
            computers[currNode].forEach((isConnected, nextNode) => {
                if (!isConnected || visited[nextNode]) return;
                visited[nextNode] = true;
                needVisit.push(nextNode)
            })
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            answer ++;
            BFS(i);
        }
    }
    
    return answer;
}