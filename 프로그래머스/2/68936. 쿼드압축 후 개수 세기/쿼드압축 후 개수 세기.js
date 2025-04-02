function solution(arr) {
    let answer = [0, 0];
    const len = arr.length;
    
    const compress = (a, b, n) => {
        // base case      
        const half = Math.floor(n / 2);
        const init = arr[a][b];
        
        for (let i = a; i < a + n; i++) {
            for (let j = b; j < b + n; j++) {
                if (arr[i][j] != init) {
                    // recursive
                    compress(a, b, half); 
                    compress(a, b + half, half);
                    compress(a + half, b, half);      
                    compress(a + half, b + half, half);
                    return
                }
            }
        }
        answer[init]++;
    }
    
    compress(0, 0, len)
    
    return answer;
}