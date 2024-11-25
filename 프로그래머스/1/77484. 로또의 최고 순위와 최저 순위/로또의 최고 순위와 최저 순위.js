function solution(lottos, win_nums) {
    
    // 일치하는 수 찾기
    const correct_nums = win_nums.filter(num => lottos.includes(num)).length;
    
    // 0의 개수 찾기
    const zeroes = lottos.filter(num => num == 0).length;
    
    // 순위 계산
    const maxRank = correct_nums + zeroes > 0 ? 7 - (correct_nums + zeroes) : 6;
    const minRank = correct_nums > 0 ? 7 - correct_nums : 6;

    return [maxRank, minRank];
}