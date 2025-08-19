function solution(rank, attendance) {
    const [a, b, c] = rank
        .map((r, i) => [r, i])
        .filter(([_, i]) => attendance[i])
        .sort((a, b) => a[0] - b[0])
        .slice(0, 3);
    
    return 10000 * a[1] + 100 * b[1] + c[1];
}