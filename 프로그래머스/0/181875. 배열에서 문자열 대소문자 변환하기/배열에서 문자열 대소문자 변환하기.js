function solution(strArr) {
    return strArr.map((string, i) => i % 2 === 0 ? string.toLowerCase() : string.toUpperCase());
}