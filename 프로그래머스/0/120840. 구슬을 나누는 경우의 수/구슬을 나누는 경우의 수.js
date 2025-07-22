function solution(balls, share) {
    // 메모이제이션 이용
    const factorial = (() => {
        const memo = [1]; // 0! = 1
        return (n) => {
            if (memo[n] != null) return memo[n];
            for (let i = memo.length; i <= n; i++) {
                memo[i] = memo[i - 1] * i;
            }
            return memo[n];
        };
    })();
    
    return Math.round(
        factorial(balls) / (factorial(share) * factorial(balls - share))
    );
}