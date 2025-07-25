// [1,5,3,5,1,2,1,4]

function solution(board, moves) {
    const basket = [];
    let answer = 0;
    
    moves.forEach(move => {
        // 해당 행의 제일 위의 인형 찾기
        for (const row of board) {
            if (row[move - 1] > 0) {
                // 바구니에 추가
                basket.push(row[move - 1]);
                // 기계에서 삭제
                row[move - 1] = 0;
                break;
            }
        }
        
        if (basket.length >= 2 && new Set(basket.slice(-2)).size === 1) {
            answer += 2;
            basket.pop();
            basket.pop();
        }
    })
    
    return answer;
}