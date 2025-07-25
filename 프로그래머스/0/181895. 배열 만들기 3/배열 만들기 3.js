function solution(arr, intervals) {
    const [first_arr, sec_arr] = intervals;
    
    return [...arr.slice(first_arr[0], first_arr[1] + 1), ...arr.slice(sec_arr[0], sec_arr[1] + 1)];
}