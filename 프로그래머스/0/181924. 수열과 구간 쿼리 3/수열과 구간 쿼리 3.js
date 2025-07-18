function solution(arr, queries) {
    for(let [i, j] of queries) {
        // 구조분해 할당은 가능
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}