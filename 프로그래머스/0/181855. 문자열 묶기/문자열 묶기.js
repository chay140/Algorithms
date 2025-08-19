function solution(strArr) {
    const map = new Map();
    let max = 0;
    
    strArr.forEach(str => {
        map.set(str.length, (map.get(str.length) || 0) + 1);
        
        if (map.get(str.length) > max) max = map.get(str.length);
    })
    
    return max;
}