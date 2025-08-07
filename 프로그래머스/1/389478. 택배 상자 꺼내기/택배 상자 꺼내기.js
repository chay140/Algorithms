function solution(n, w, num) {
    let answer = 0;
    
    // 택배상자 쌓인 상태
    const full_rows = Math.floor(n / w);
    const remaining_boxes = n % w;
    const last_row = new Array(w).fill(false);
    
    // 마지막 줄 상태
    // 상자가 있는 상태를 true로 기록
    for (let i = 0; i < remaining_boxes; i++) {
        // 이전 row가 짝수번째라면 마지막 row는 홀수번째(left -> right)
        if (full_rows % 2 === 0) {
            last_row[i] = true;
        } else {    // 반대로 (right -> left)
            last_row[w - i - 1] = true;
        }
    }
        
    // 목표 상자 위치 파악
    const target_row = Math.ceil(num / w);
    let target_idx = 0;
    
    // 목표가 짝수번째 줄에 존재한다면
    if (target_row % 2 === 0) {
        target_idx = num % w === 0 ? 0 : w - (num % w);
    } else {
        target_idx = num % w === 0 ? w - 1 : (num % w) - 1;
    }

    // 목표 위의 꽉 찬 줄의 수를 answer에 더해줌
    answer += full_rows - target_row;
    
    // 목표 제일 위의 마지막 줄이 차있다면 answer++
    if (last_row[target_idx]) answer++;
    
    // 목표 상자까지 꺼내기
    return answer + 1;
}