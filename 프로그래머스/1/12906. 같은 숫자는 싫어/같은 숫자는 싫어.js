function solution(arr)
{
    const answer = [arr[0]];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.slice(-1)[0] !== arr[i]) {
            answer.push(arr[i])
        }
    }
    
    return answer;
}