function solution(clothes) {
    let answer = 1;
    let map = new Map();
    
    clothes.forEach((item) => {
        map.set(item[1], (map.get(item[1]) || 0) + 1);
    })
    
    for (let value of map.values()) {
        answer *= (value + 1)
    }
    
    // 하나도 입지 않은 경우 제외
    return answer - 1;
}