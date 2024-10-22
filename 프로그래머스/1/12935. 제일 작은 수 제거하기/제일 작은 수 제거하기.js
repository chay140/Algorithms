function solution(arr) {
    if (arr.length === 1) return [-1];
    
    const min = Math.min(...arr);
    const min_index = arr.indexOf(min);
    arr.splice(min_index, 1);
    return arr;
}