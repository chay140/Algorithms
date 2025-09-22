function solution(sizes) {
  let maxW = 0;
  let maxH = 0;

  sizes.forEach(([w, h]) => {
    // 돌려야 할 명함 돌리기
    const rotateW = Math.max(w, h);
    const rotateH = Math.min(w, h);

    // 지갑 가로 세로 크기에 맞게 업데이트
    if (maxW < rotateW) maxW = rotateW;
    if (maxH < rotateH) maxH = rotateH;
  });

  return maxW * maxH;
}