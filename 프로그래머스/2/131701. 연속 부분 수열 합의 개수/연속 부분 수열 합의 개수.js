function solution(elements) {
    // 슬라이딩 윈도우
    const sums = new Set();
    
    for (let i = 0; i < elements.length; i++) {  // 수열 길이
        let sum = 0;
        for (let j = 0; j < elements.length; j++) {  // 연속 부분 수열의 길이
            if (j === 0) { // 최초 한 번만 합 구하기
                for (let k = 0; k < i; k++) {
                    sum += elements[k]
                }
            } else {    // 이전 합 활용
                sum -= elements[j-1];
                sum += elements[(j+i-1) % elements.length];
            }
            sums.add(sum)
        }
    }
    return sums.size;
}