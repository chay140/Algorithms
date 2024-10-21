function solution(arr, divisor) {
    // 배수 찾기
    let answer = arr.filter((element) => {
        return element % divisor === 0;
    });
    
    // 비어있는지 체크
    if (answer.length === 0) return [-1];
    
    // 오름차순 정렬
    answer.sort((a,b) => a-b);
    
    return answer;
}