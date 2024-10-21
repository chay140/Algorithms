function solution(n) {
    let root = Math.sqrt(n);
    
    if (Number.isInteger(root)) return Math.pow(root+1, 2);
    else return -1;
}