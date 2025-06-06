function solution(participant, completion) {
    const map = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        const a = participant[i],
              b = completion[i];
        
        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }
    
    for (let [k, v] of map) {
        if (v > 0) return k;
    }
    
    // 문제 제한 사항에 따라
    return 'should_never_be_returned';
}