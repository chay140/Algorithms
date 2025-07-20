function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const map = new Map();
    
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    const sorted_map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    const entries = [...sorted_map.entries()];
    
    if (map.size === 1) return entries[0][0] * 1111;
    else if (map.size === 2) {
        if (entries[0][1] === entries[1][1]) {
            return ((entries[0][0] + entries[1][0]) * Math.abs(entries[0][0] - entries[1][0]));
        } else return Math.pow((10 * entries[0][0] + entries[1][0]), 2);
    } else if (map.size === 3) {
        return entries[1][0] * entries[2][0];
    } else {
        entries.sort((a, b) => a[0] - b[0]);
        return entries[0][0];
    }
}