function solution(n, t, m, p) {
    // 구해야할 전체 개수 m * t
    let baseStrings = ""
    
    let i = 0;
    while(baseStrings.length < m * t) {
        const converted = (i).toString(n).toUpperCase();
        baseStrings += converted
        i++;
    }
    
    let answer = "";
    for (let j = 0; j < baseStrings.length; j++) {
        if ((j + 1) % m === p % m) answer += baseStrings[j];
        
        if (answer.length === t) break;
    }
    
    return answer;
}