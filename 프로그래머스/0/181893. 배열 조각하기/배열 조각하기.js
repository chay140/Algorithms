function solution(arr, query) {
    query.forEach((val, idx) => {
        if (idx % 2 === 0) {
            arr = arr.slice(0, val + 1);
        } else {
            arr = arr.slice(val);
        }
    })
    
    return arr;
}