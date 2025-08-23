function solution(triangle) {
    let dp_triangle = [];
    for (let i = 0; i < triangle.length; i++) {
        let each_row = [];
        for (let j = 0; j < triangle[i].length; j++) {
            let temp = -1;
            // initial case
            if (i === 0 && j === 0) {
                temp = triangle[i][j]
            } else {
                if (j === 0) {
                    temp = dp_triangle[i-1][j] + triangle[i][j];
                } else if (j === triangle[i].length - 1) {
                    temp = dp_triangle[i-1][j-1] + triangle[i][j];
                } else {
                    temp = Math.max(dp_triangle[i-1][j-1], dp_triangle[i-1][j]) + triangle[i][j];
                }
            }
            each_row.push(temp)
        }
        // 연산한 값 계산
        dp_triangle.push(each_row)
    }
    
    return Math.max(...dp_triangle[dp_triangle.length -1]);
}