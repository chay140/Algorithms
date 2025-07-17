function solution(a, d, included) {    
    return Array(included.length)
        .fill(0)
        .map((val, i) => a + d * i)
        .filter((val, i) => included[i])
        .reduce((a, c) => a + c, 0);
}