function solution(arr, n) {
    if (arr.length % 2 === 0) {
        return arr.map((num, idx) => idx % 2 === 1 ? num + n : num);
    }
    return arr.map((num, idx) => idx % 2 === 0 ? num + n : num);
}