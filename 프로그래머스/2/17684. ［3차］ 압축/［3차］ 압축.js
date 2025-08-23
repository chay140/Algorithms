function solution(msg) {    
    // 초기 사전
    const dict = {}
    const output = [];
    
    // 사전 초기화
    const alphabets = new Set([...msg]);
    for (const char of alphabets.values()) {
        dict[char] = char.charCodeAt(0) - 64
    }
    
    // 순회
    let new_last_i = 27;
    while (msg.length) {
        // w 구하기
        let j = 1;
        while (j <= msg.length && dict[msg.slice(0, j)]) j++;
        
        const w = msg.slice(0, j - 1);
        const c = msg[w.length];
        
        // 출력에 추가
        output.push(dict[w]);
        
        // w + c도 추가
        if (c) dict[w + c] = new_last_i++;
        
        msg = msg.slice(w.length);
    }
    return output;
}