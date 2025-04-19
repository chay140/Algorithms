function solution(m, n, puddles) {
    let dp = Array.from({length: n}, () => new Array(m).fill(0));
    dp[0][0] = 1;

    // 웅덩이 표시
    for (let puddle of puddles) {
        dp[puddle[1] - 1][puddle[0] - 1] = -1;
    }
    
    for (let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[i].length; j++) {
            if (dp[i][j] < 0 || (i === 0 && j === 0)) continue;
            
            // 왼쪽의 경우의 수
            if (j - 1 >= 0 && dp[i][j - 1] >= 0) {
                dp[i][j] += dp[i][j - 1] % 1000000007;
            }
            // 위쪽의 경우의 수
            if (i - 1 >= 0 && dp[i - 1][j] >= 0) {
                dp[i][j] += dp[i - 1][j] % 1000000007;
            }
            
        }
    }
        
    return dp[n - 1][m - 1] % 1000000007;
}