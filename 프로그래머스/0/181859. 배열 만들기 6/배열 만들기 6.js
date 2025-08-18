function solution(arr) {
    const answer = [];
    
    for (let i = 0; i < arr.length; i++) {
        if (answer.length && answer.slice(-1)[0] === arr[i]) {
            answer.pop();
        } else {
            answer.push(arr[i]);
        }
    }
    
    return answer.length ? answer : [-1];
}