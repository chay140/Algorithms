function solution(brown, yellow) {
    let answer = [];
    
    // yellow -> 1 row
    // brown width -> 1+2 = 3
    // total tile / 3 = 3(integer) -> answer;
    
    // yellow -> 1 row
    // brown width -> 2+2 = 4
    // total tile / 4 = 3(integer) -> answer;
    
    // yellow -> 1 row
    // brown width -> 24+2 = 26
    // total tile / 26 = non-integer
    // yellow -> 2 row
    // brown width -> 12+2 = 14
    // total tile / 14 = non-integer
    // yellow -> 3 row (integer)인지도 확인 필요
    // brown width -> 8+2 = 10
    // total tile / 10 = non-integer
    // yellow -> 4, brown-width -> 6+2 = 8
    // total tile / 8 = 6 (integer)
    // 둘 중 큰 것을 가로, 작은 것을 세로
    
    const totalTile = brown + yellow;
    let yellowRows = 1;
    while (answer.length === 0) {
        const tempBrownWidth = yellow / yellowRows + 2;
        
        if (Number.isInteger(tempBrownWidth)) {
            const totalRows = totalTile / tempBrownWidth;
            
            if (Number.isInteger(totalRows)) {
                answer.push(Math.max(totalRows, tempBrownWidth));
                answer.push(Math.min(totalRows, tempBrownWidth));
                break;
            }
        }
        yellowRows++;
    }
    
    return answer;
}