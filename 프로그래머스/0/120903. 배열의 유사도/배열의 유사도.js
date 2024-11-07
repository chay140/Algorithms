function solution(s1, s2) {
    let answer = s1.filter((s) => s2.includes(s));
    return answer.length;
}