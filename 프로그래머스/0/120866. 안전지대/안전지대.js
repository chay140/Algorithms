function solution(board) {
    // xy
    let border = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    let not_safe = 0;
    const n = board.length;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                not_safe++;
                // 주변을 2로 표현 + answer++
                for (const [x, y] of border) {
                    if (i + x < 0 || i + x >= n) continue;
                    if (j + y < 0 || j + y >= n) continue;
                    
                    if (board[i + x][j + y] === 0) {
                        not_safe++;
                        board[i + x][j + y] = 2;
                    }
                }
            }
        }
    }
    
    return n*n - not_safe;
}