function solution(nums) {
    const map = new Map();
    
    // 총 폰켓몬 종류수 파악
    nums.forEach((num) => {
        map.set(num, (map.get(num) || 0) + 1);
    })

    return Math.min(nums.length / 2, map.size);
}