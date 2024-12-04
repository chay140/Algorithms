function solution(s) {    
    let x = 0;
    let non_x = 0;
    
    let words = [];
    let substring = "";
    for (let i = 0; i < s.length; i++) {
        if (substring.length === 0 || substring[0] === s[i]) {
            substring += s[i]
            x++;
        } else {
            substring += s[i]
            non_x++;
        }
        
        if (x === non_x) {
            console.log(substring)
            words.push(substring)
            substring = ""
        }
    }
    // 마지막 문자열
    substring && words.push(substring);
    console.log(words)
    
    return words.length;
}