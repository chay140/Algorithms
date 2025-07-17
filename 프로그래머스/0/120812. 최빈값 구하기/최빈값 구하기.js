function solution(array) {
  const map = new Map();
  let maxFreq = 0;

  for (const item of array) {
    const freq = (map.get(item) || 0) + 1;
    map.set(item, freq);
    if (freq > maxFreq) maxFreq = freq;
  }

  // maxFreq를 가진 값이 여러 개인지 확인
  let mode = -1;
  let count = 0;
  for (const [num, freq] of map) {
    if (freq === maxFreq) {
      count++;
      mode = num;
    }
  }

  return count === 1 ? mode : -1;
}
