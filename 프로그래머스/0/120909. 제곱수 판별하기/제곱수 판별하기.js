function solution(n) {
    let target = Math.sqrt(n);
    return Number.isInteger(target) ? 1 : 2;
}