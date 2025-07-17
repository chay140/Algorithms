function solution(array, height) {
    let answer = 0;
    
    for (const item of array) {
        if (item > height) answer++;
    }
    
    return answer;
}