function solution(s) {
    const map = new Map();
    
    for (const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }
    
    return [...map.entries()].filter(val => val[1] === 1)
                                .map(element => element[0])
                                .sort().join("");    
}