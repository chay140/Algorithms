function solution(number, limit, power) {
    let answer = 0;
    
    const find_divisor_count = (num) => {
        let count = 0;
        for (let i = 0; i * i <= num; i++) {
            if (i*i === num) count++;
            else if (num % i === 0) count += 2;
        }
        return count;
    }
    
    for (let i = 1; i <= number; i++) {
        let divisor_count = find_divisor_count(i);
        
        if (divisor_count > limit) {
            divisor_count = power;
        }
        answer += divisor_count;
    }
    return answer;
}