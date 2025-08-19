function solution(arr1, arr2) {
    // 길이비교
    if (arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    } 
    
    const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
    const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
        
    const diff = sum1 - sum2;
    if (diff > 0) return 1;
    else if (diff < 0) return -1;
    return diff;
}