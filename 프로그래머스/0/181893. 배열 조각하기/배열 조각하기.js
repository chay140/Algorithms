function solution(arr, query) {
    query.forEach((val, idx) => arr = idx % 2 === 0 ? arr.slice(0, val + 1): arr.slice(val));
    
    return arr;
}