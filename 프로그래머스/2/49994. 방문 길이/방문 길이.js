function solution(dirs) {
    const firstPaths = new Set();
    const dir_map = {
        "L": [-1 , 0],
        "R": [1, 0],
        "U": [0, 1],
        "D": [0, -1]
    }    

    let x = 0;
    let y = 0;
    [...dirs].forEach(dir => {
        const [nextX, nextY] = dir_map[dir];
        
        // 왔던 길을 추가 -> 범위 유효할때
        if (Math.abs(x + nextX) <= 5 && Math.abs(y + nextY) <= 5) {
            // 두점을 잇는 길 생성
            const curr_point = [x, y];
            const next_point = [x + nextX, y + nextY];
            // 예) [0, 0]과 [0, 1]을 잇는 길을 0,00,1로 표현한다
            // [0, 1]과 [0, 0]을 잇는 길도 동일하므로
            // sort()를 활용해 유니크한 인덱스를 만든다
            const path = [curr_point, next_point].sort((a, b) => {
                if (a[0] === b[0]) return a[1] - b[1];
                return a[0] - b[0]
            }).join("")
            firstPaths.add(path);
            x += nextX;
            y += nextY;
        }
    });
    
    return firstPaths.size;
}