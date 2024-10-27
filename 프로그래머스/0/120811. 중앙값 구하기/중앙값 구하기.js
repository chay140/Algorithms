function solution(array) {
    array.sort((a,b) => a - b);
    const mid_index = Math.floor(array.length / 2);
    return array[mid_index];
}