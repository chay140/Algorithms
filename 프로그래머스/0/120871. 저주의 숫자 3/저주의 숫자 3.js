function solution(n) {
    let threeX = 0;
    for (let i = 1; i <= n; i++) {
        threeX += 1;
        while (threeX % 3 === 0 || String(threeX).includes("3")) threeX++;
    }
    return threeX;
}