function solution(s) {
    let steps = 0
    let zeroes = 0;
    while (s !== "1") {
        const ones = s.replaceAll("0",'');
        // 0 개수 파악
        zeroes += s.length - ones.length;
    
        // 길이 2진법으로 표현
        s = Number(ones.length).toString(2);
        
        steps++;
    }
    return [steps, zeroes];
}