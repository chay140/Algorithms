function solution(sequence, k) {
    let possible_subsequence = [];
    
//     // Brute Force
//     for (let i = 0; i < sequence.length; i++) {
//         for (let j = i; j < sequence.length; j++) {
//             if (i === j && sequence[i] === k) {
//                 return [i, j]
//             }
            
//             const sub_sum = sequence.slice(i,j).reduce((acc, curr) => {
//                 return acc + curr;
//             }, 0);
//             if (sub_sum === k) {
//                 possible_subsequence.push([i, j - 1]);
//             }
//         }
//     }
    
    // Two pointer
    let sum = 0;
    let start = 0;
    let end = 0;
    sum += sequence[start];
    while (start < sequence.length && end < sequence.length) {
        // 부분합이 작은 경우
        if (sum < k) {
            end++;
            if (end >= sequence.length) break;
            sum += sequence[end];
        } else {
            // 부분합이 같은 경우
            if (sum === k) {
                possible_subsequence.push([start, end]);  
            }

            // 부분합이 큰 경우 (다음 경우로 넘어가기)
            sum -= sequence[start];
            start++;
        } 

            
        
    }
    
    
    possible_subsequence.sort((a,b) => ((a[1] - a[0]) >= (b[1] - b[0]) ? 1 : -1));
    
    return possible_subsequence[0];
}