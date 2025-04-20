function solution(maps) {
    let n = maps.length; // 열
    let m = maps[0].length; // 행
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    
    const bfs = () => {
        let needVisit = [[0, 0, 1]];  // 열, 행, 이동거리
        // 지나간 곳은 0으로 변경 (시작점부터)
        maps[0][0] = 0;
        
        while (needVisit.length > 0 ) {
            const [row, col, dis] = needVisit.shift();
            
            // 도착지점
            if (row === n - 1 && col === m - 1) {
                return dis;
            }
            
            // 상하좌우 이동 확인
            for (let [r, c] of dir) {
                const newRow = row + r;
                const newCol = col + c;
                
                // 이동 가능
                if (newRow >= 0 && newRow < n && newCol >= 0 && newCol < m && maps[newRow][newCol] === 1) {
                    needVisit.push([newRow, newCol, dis + 1]);
                    maps[newRow][newCol] = 0;
                }
            }
        }
        // 모두 방문했음에도 반환되지 않은 경우
        return -1;
    }
    
    return bfs();
}