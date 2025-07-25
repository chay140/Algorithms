function solution(n) {
    // 10! 이 최대이므로
    const factorials = Array.from({ length: 10 }).reduce((acc, _, i) => {
      acc[i] = i === 0 ? 1 : acc[i - 1] * (i + 1);
      return acc;
    }, []);
    
    let i = 0;
    while (factorials[i] <= n) i++;
    
    return i;
}