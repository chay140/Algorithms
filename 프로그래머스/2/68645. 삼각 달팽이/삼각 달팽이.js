function solution(n) {
    // 삼각형 배열
    const triangle = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
    let curr = 1;
    const direction = [-1, 0]; // 아래로 (초기값)
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            // 아래로
            if (i % 3 === 0) {
                direction[0] += 1
            }
            // 오른쪽으로
            if (i % 3 === 1) {
                direction[1] += 1
            }
            // 대각선 왼쪽 위로
            if (i % 3 === 2) {
                direction[0] -= 1;
                direction[1] -= 1;
            }

            // 현재 좌표의 수 채우기
            triangle[direction[0]][direction[1]] = curr;
            curr += 1;
        }
    }
    
    return triangle.flat();
}