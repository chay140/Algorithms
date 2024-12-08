function solution(s, skip, index) {
    let answer = '';
    
    const skip_ascii = skip.split('').map((s) => s.charCodeAt(0));
    
    for (let j = 0; j < s.length; j++) {
        let char_ascii = s[j].charCodeAt(0);
        let temp = index;

        do {
            char_ascii++;
            // z를 넘겼다면
            if (char_ascii > 122) {
                char_ascii = 97;
            }
            
            if (!skip_ascii.includes(char_ascii)) {
                temp--;
            }
        } while (temp > 0);
        
        answer += String.fromCharCode(char_ascii);
    }
    
    return answer;
}