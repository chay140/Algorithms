function solution(wallpaper) {
    let file_position = []
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") {
                file_position.push([i, j])
            }
        }
    }
    // 최소 및 최대 x 값 구하기
    const left_x = file_position[0][0];
    const right_x = file_position.slice(-1)[0][0];
    
    // 최소 및 최대 y 값 구하기
    file_position.sort((a, b) => a[1] - b[1]);
    const left_y = file_position[0][1]; 
    const right_y = file_position.slice(-1)[0][1];
    
    return [left_x, left_y, right_x + 1, right_y + 1];
}