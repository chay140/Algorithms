function solution(n) {
    return n.toString().split("").map(Number).reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0,
    );
    
}