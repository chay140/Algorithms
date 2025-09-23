function solution(m, n, puddles) {
    const MOD = 1_000_000_007;
    const puddlesSet = new Set(puddles.map(puddle => `${puddle[0]},${puddle[1]}`));
    const memo = {};
    
    const dp_top_down = (x, y) => {
        // 베이스 케이스
        if (x === 1 && y === 1) return 1;
        if (x === 0 || y === 0) return 0;
        
        const key = `${x},${y}`
        
        if (key in memo) return memo[key];
        if (puddlesSet.has(key)) return 0;
        
        memo[key] = (dp_top_down(x - 1, y) + dp_top_down(x, y - 1)) % MOD;
        return memo[key];
    }
    
    dp_top_down(m, n)

    return memo[`${m},${n}`]
}