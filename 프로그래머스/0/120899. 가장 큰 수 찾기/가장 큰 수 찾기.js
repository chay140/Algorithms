function solution(array) {
    const answer = [-1, 0];
    let max = -1;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
            answer[0] = array[i];
            answer[1] = i;
        }
    }
    
    return answer;
}