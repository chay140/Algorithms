function solution(numbers) {
    let ans = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        ans += numbers[i];
    }
    
    return ans / numbers.length;
}