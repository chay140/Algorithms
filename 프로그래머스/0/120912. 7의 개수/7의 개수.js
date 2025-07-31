function solution(array) {
    let answer = 0;
    for (const num of array) {
        answer += String(num).split("7").length - 1;
    }
    
    return answer;
}