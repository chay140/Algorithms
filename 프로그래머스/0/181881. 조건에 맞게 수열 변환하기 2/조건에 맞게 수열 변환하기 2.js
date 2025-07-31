function solution(arr) {
    let x = 0;
    let prev = [];
    
    while (JSON.stringify(prev) !== JSON.stringify(arr)) {
        prev = [...arr];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) arr[i] /= 2;
            else if (arr[i] < 50 && arr[i] % 2 === 1) arr[i] = arr[i] * 2 + 1;
        }
        x++;
    }
    return x - 1;
}