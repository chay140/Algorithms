// function solution(n) {
    // 순열 계산을 이용했던 방식
    // 100!부터 값이 점점 커며, 수 계산이 이상한 문제 존재
//     let answer = 0;
    
//     const factorialize = (num) => {
//         if (num === 0 || num === 1)
//             return 1;
//         for (var i = num - 1; i >= 1; i--) {
//             num *= i;
//         }
//         return num;
//     }
    

//     for (let i = 0; i <= n; i += 2) {
//         const ones = n - i;
//         const twos = i / 2;
//         const temp = factorialize(ones + twos) / (factorialize(ones) * factorialize(twos));
        
//         answer += temp;
//     }
//     return answer % 1234567;
    
// }

function solution(n) {
    const dp = [1, 1];

    for (let i=2; i<=n; i++) {
        dp[i] = (dp[i-2] + dp[i-1]) % 1234567;
      // 1234567로 나눈 나머지를 저장
      // (결과값이 너무 크면 overflow 에러가 발생할 수 있음)
    }

    return dp[n]; // n번째 값 return
}

