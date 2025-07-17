function solution(a, d, included) {    
    return Array(included.length)
        .fill(0)
        .map((_, i) => a + d * i)
        .filter((_, i) => included[i])
        .reduce((a, c) => a + c, 0);
}