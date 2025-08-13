function solution(score) {
    const averages = score.map(([english, math]) => (english + math) / 2);
    // slice로 새로운 카피(깊은 복사)
    const sorted = averages.slice().sort((a, b) => b - a);
    return averages.map(avg => sorted.indexOf(avg) + 1);
}