function solution(n) {
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    dp[1] = 2;
    
    for (let i = 2; i < n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
    }
    
    console.log(dp)
    return dp[n - 1];
}

// 패턴을 구하다보면 피보나치 수열임을 알 수 있다
// n = 1  >>  1
// n = 2  >>  2
// n = 3  >>  3
// n = 4  >>  5
// n = 5  >>  8
// n = 6  >>  13