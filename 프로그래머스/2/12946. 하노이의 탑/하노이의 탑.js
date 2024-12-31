function solution(n) {
    let answer = [];
    // 재귀적 함수를 이용한 풀이
    // wikipedia 참조
    const hanoi = (n, from, to, via) => {
        if (n === 1) {
            answer.push([from, to])
            return;
        } else {
            // 예시) 1기둥에서 3으로 
            hanoi(n-1, from, via, to);
            // 마지막 원판을 3으로 옮긴다
            answer.push([from, to]);
            // 예시) 남아있는 2기둥에서 3으로
            hanoi(n-1, via, to, from)
        }
    }
    hanoi(n, 1, 3, 2);
    
    return answer;
}