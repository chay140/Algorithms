function solution(arr)
{
    let answer = [];

    // 첫 요소 미리 추가
    answer.push(arr[0]);
    let ans_index = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (answer[ans_index] === arr[i]) {
            continue;
        } else {
            answer.push(arr[i]);
            ans_index += 1;
        }
    }
    
    return answer;
}