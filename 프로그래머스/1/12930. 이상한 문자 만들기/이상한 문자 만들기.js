function solution(s) {
    let answer = [];
    
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === " ") {
            counter = 0;
            answer.push(s.charAt(i));
        } else if (counter % 2 === 0) {
            // 짝수
            counter += 1;
            answer.push(s.charAt(i).toUpperCase());
        } else if (counter % 2 === 1) {
            // 홀수
            counter += 1;
            answer.push(s.charAt(i).toLowerCase());
        }
    }
    return answer.join('');
}