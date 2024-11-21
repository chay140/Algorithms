function solution(n, m, section) {
    let answer = 0;
    
    // section이 1인 경우
    if (section.length === 1) return 1;
    
    let last_painted  = 0;
    let index = 0;
    
    while (index < section.length) {
        if (last_painted < section[index]) {
            last_painted = section[index] + (m - 1);
            answer ++;
        }
        index++;
    }
    
    
    return answer;
}