function solution(number) {
    let total = 0;
    
    for (const char of number) total += Number(char);
    
    return total % 9;
}