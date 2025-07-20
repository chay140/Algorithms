function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    const map = new Map();
    
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    
    const sorted_entries = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    if (map.size === 1) return sorted_entries[0][0] * 1111;
    else if (map.size === 2) {
        if (sorted_entries[0][1] === sorted_entries[1][1]) {
            return ((sorted_entries[0][0] + sorted_entries[1][0]) * Math.abs(sorted_entries[0][0] - sorted_entries[1][0]));
        } else return Math.pow((10 * sorted_entries[0][0] + sorted_entries[1][0]), 2);
    } else if (map.size === 3) {
        return sorted_entries[1][0] * sorted_entries[2][0];
    } else {
        sorted_entries.sort((a, b) => a[0] - b[0]);
        return sorted_entries[0][0];
    }
}