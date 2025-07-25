function solution(arr, idx) {
    let answer = -1;
    
    while (idx < arr.length) {
        if (arr[idx] === 1) {
            answer = idx;
            break;
        }
        idx++;
    }
    
    return answer;
}