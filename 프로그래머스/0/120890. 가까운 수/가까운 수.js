function solution(array, n) {
    let abs_diff = 101;
    let answer = 0;
    for (const num of array) {
        const new_diff = Math.abs(num - n);
        if (new_diff < abs_diff) {
            abs_diff = new_diff;
            answer = num;
        } else if (new_diff === abs_diff) {
            answer = Math.min(num, answer);
        }
    }
    return answer;
}