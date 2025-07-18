function solution(arr, queries) {
    for (const query of queries) {
        const first = arr[query[0]];
        const second = arr[query[1]];
        
        arr[query[0]] = second;
        arr[query[1]] = first;
    }
    
    return arr;
}