function solution(nums) {
    let answer = 0;
    
    const check_prime = (n) => {
        for (let m = 2; m < n/2; m++) {
            if (n % m === 0) return false;
        }
        return true;
    }
    
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if (check_prime(nums[i] + nums[j] + nums[k])) answer += 1;
            }
        }
    }
    
    return answer;
}