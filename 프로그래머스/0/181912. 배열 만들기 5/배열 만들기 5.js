function solution(intStrs, k, s, l) {
    return intStrs.map(string => Number(string.slice(s, s + l))).filter(val => val > k)
}