function solution(t, p) {
    let answer = 0;
    const t_len = t.length;
    const p_len = p.length;
    for (let i = 0; i < (t_len - p_len) + 1; i++) {
        const temp = t.slice(i, i+p_len);
        if (Number(temp) <= Number(p)) answer += 1;
    }
    return answer;
}