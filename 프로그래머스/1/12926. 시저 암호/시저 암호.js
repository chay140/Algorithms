function solution(s, n) {
    // charCodeAt(), fromCharCode
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        const ascii = s.charCodeAt(i);
        
        // 공백은 그대로
        if (ascii === 32) {
            answer.push(ascii);
        } else {
            // 범위 체크
            let shift = ascii + n;
            
            // 대문자의 경우
            if ((ascii > 64 && ascii < 91) && shift > 90) {
                shift -= 26;
            }
            
            // 소문자의 경우
            if ((ascii > 96 && ascii < 123) && shift > 122) {
                shift -= 26;
            }
                     
            answer.push(shift);
        }
    }
    return String.fromCharCode(...answer);
}