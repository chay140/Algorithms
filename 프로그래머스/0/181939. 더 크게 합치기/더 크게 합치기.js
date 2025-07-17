function solution(a, b) {
    const str_a = a.toString();
    const str_b = b.toString();
    
    return Math.max(Number(str_a + str_b), Number(str_b + str_a));
}