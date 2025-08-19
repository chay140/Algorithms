function solution(arr) {
    let i = 0;
    
    for (i; i < 11; i++) {
        if (Math.pow(2, i) >= arr.length) break;
    }
    
    const new_length = Math.pow(2, i);
    
    return [...arr, ...Array(new_length - arr.length).fill(0)];
}