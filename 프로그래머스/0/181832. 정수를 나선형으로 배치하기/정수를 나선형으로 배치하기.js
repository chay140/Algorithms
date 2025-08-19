function solution(n) {
    // right, bottom, left, top
    const direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];    
    const answer = Array.from({length: n}, () => new Array(n).fill(0)); // 초기 배열
    const validRange = (val) => val < n && val > -1;
    
    let i = 1;
    let col = 0;
    let row = 0;
    let dir_idx = 0;
    while (i <= n * n) {
        answer[row][col] = i;
        // 현재 방향 그대로 나아가도 되는지 체크
        let [nextRow, nextCol] = direction[dir_idx];
        if (!validRange(row + nextRow) || !validRange(col + nextCol) || answer[row + nextRow][col + nextCol] !== 0) {
            // 변경이 필요한 경우
            dir_idx = dir_idx + 1 > 3 ? 0 : dir_idx + 1;
            nextRow = direction[dir_idx][0];
            nextCol = direction[dir_idx][1];
        }

        // 다음칸으로 이동합니다
        row += nextRow;
        col += nextCol;
        i++;
    }
    
    
    return answer;
}