function solution(num1, num2) {
    // reduce 연습
    const array = [num1, num2];
    let answer = array.reduce((accumulator, currentVal) => {
        return accumulator + currentVal;
    }, 0);
    
    return answer;
}