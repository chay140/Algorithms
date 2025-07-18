function solution(num_list) {
    let multi = num_list.reduce((a, c) => a * c, 1);
    let sum_squared = Math.pow(num_list.reduce((a, c) => a + c, 0), 2);
    
    return Number(multi < sum_squared);
}