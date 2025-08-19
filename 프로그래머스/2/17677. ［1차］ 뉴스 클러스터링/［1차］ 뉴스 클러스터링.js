function solution(str1, str2) {
    const setA = [];
    const setB = [];
    
    for (let i = 0; i < Math.max(str1.length, str2.length) - 1; i++) {
        // 2문자열씩 나누고 영문자인 쌍만 각 set에 추가
        if (str1.slice(i, i + 2).match(/^[a-zA-Z]{2,}$/)) setA.push(str1.slice(i, i + 2).toLowerCase());
        if (str2.slice(i, i + 2).match(/^[a-zA-Z]{2,}$/)) setB.push(str2.slice(i, i + 2).toLowerCase());
    }
    
    // 둘 다 공집합인 경우
    if (setA.length === 0 && setB.length === 0) return 65536;
    
    // 교집합의 수와 합집합의 수
    let intersection = 0;
    let union = setA.length;
    
    for (let j = 0; j < setB.length; j++) {
        if (setA.includes(setB[j])) {
            intersection++;
            // 다중 집합이므로 비교 완료한 원소는 제거
            setA.splice(setA.indexOf(setB[j]), 1);
        } else union++;
    }
    
    return ~~((intersection/union) * 65536);
}