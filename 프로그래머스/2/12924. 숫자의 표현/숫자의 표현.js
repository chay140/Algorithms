function solution(n) {
    let answer = 0;

    for (let k = 1; k * (k - 1) / 2 < n; k++) {
        // x = (n - (k * (k - 1)) / 2) / k 정수인 경우만!
        if ((n - (k * (k - 1)) / 2) % k === 0) {
            answer++;
        }
    }

    return answer;
}