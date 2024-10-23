function solution(s) {
    // regex 이용한 함수
    const isNumeric = (string) => /^[+-]?\d+(\.\d+)?$/.test(string);
    
    let answer = true;
    const length = s.length;
    if (!isNumeric(s) || !(length === 4 || length === 6)) {
        return false;
    }
    return answer;
}