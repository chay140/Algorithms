function solution(arr, flag) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            answer = [...answer, ...new Array(arr[i] * 2).fill(arr[i])];
        } else {
            for (let _ = 0; _ < arr[i]; _++) {
                answer.pop();
            }
        }
    }
    
    return answer;
}