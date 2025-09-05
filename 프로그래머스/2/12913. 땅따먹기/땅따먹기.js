function solution(land) {
    let answer = 0;
    
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            let row = [...land[i - 1]];
            
            // 같은 열 추가되면 안되므로 0으로 변경
            row[j] = 0;
            
            // 시간 초과 이슈로 apply 사용
            land[i][j] += Math.max.apply(null, row);
            
            // answer 업데이트
            answer = Math.max(land[i][j], answer);
        }
    }
    return answer;
}