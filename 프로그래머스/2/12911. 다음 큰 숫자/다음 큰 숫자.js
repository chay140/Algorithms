function solution(n) {
    let answer = n + 1;
    
    const binary_ones = n.toString(2).split('1').length;
    while (binary_ones !== answer.toString(2).split(1).length) {
        answer ++;
    }
    
    return answer;
}