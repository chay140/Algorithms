function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);    // 내림차순
    
    const map = new Map();
    sorted.forEach((val, i) => map.set(val, i + 1));
    
    return emergency.map((val) => map.get(val));
}