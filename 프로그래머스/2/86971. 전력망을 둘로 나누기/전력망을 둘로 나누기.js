// 제외할 노드를 넣으면 송전탑 개수를 반환하는 함수
// BFS 탐색
function bfs(tree, root, exceptNum) {
    let count = 0;
    let visited = [];       // 탐색한 노드
    let needVisit = [root]  // 탐색해야하는 노드
    visited[root - 1] = true;
    
    while (needVisit.length !== 0) {
        const node = needVisit.pop();     
        tree[node - 1].forEach(leaf => {
            if (leaf !== exceptNum && !visited[leaf - 1]) {
                visited[leaf - 1] = true;
                needVisit.push(leaf);
            }
        })
        count ++;
    }
    return count
}

function solution(n, wires) {
    let answer = Number.MAX_SAFE_INTEGER;
    // 트리 만들기
    // 해당 노드가 루트인 트리, 연결된 와이어 확인용
    let tree = Array.from(Array(n),()=>[])
    wires.map((element)=>{
        let [a,b] = element;

        tree[a-1].push(b);
        tree[b-1].push(a);
    })
    
    wires.forEach(tower => {
        let [a, b] = tower;
        answer = Math.min(answer, Math.abs(bfs(tree, a, b) - bfs(tree, b, a)))
    })
    return answer
}