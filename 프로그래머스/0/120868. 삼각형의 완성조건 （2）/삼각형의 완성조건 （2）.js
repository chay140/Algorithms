function solution(sides) {
    let answer = [];
    // 가장 긴변이 sides의 max인 경우
    const curr_max = Math.max(...sides);
    const curr_min = Math.min(...sides);
    
    let case_one = curr_max - curr_min;
    while (case_one < curr_max) {
        case_one++;
        answer.push(case_one);
    }
    
    // 새로운 가장 긴변이 존재하는 경우
    let case_two = curr_max;
    while (case_two < curr_min + curr_max - 1) {
        case_two++;
        answer.push(case_two);
    }
    
    return answer.length;
}