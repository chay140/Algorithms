function solution(X, Y) {
    let common_nums = {}
    let answer = "";
    
    // 공통으로 나타내는 수 저장
    for (let i = 0; i < 10; i++) {
        const x_count = X.split("").filter((x) => x == i).length;
        const y_count = Y.split("").filter((y) => y == i).length;
        
        if (Math.min(x_count, y_count) !== 0) {
            common_nums[i] = Math.min(x_count, y_count);
        }
    }
    
    // 공통 수
    const common_keys = Object.keys(common_nums);
    
    // 공통 숫자 없을 때 -1 반환
    if (common_keys.length === 0) {
        return "-1";
    }
        
    // 0 만 있는 경우
    if (common_keys.length === 1 && common_keys.includes("0")) {
        return "0"
    }
    
    // 큰수부터
    common_keys.reverse();
    common_keys.forEach((key) => {
        answer += key.repeat(common_nums[key]);
    });
    
    return answer;
}