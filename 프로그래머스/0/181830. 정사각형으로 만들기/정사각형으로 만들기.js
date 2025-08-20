function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;
    
    if (row === col) return arr;
    
    // 0 추가
    if (row < col) {
        for (let _ = 0; _ < col - row; _++) arr.push(Array(col).fill(0));
    } else {
        arr.forEach(r => {
            for (let _ = 0; _ < row - col; _++) r.push(0);
        })
    }
    
    return arr;
}