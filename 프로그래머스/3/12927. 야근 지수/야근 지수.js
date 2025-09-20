function solution(n, works) {   
    if (works.reduce((acc, curr) => acc + curr, 0) <= n) return 0;
    works.sort((a, b) => b - a);    
    
    // 차감
    while (n) {
        const max = works[0];
        
        for (let i = 0; i < works.length; i++) {
            if (works[i] >= max) {
                n--;
                works[i]--;
            }
            if (!n) break;
        }
    }
        
    return works.reduce((acc, curr) => acc + curr * curr, 0);
}