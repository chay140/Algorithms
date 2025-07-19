function solution(arr) {
    return arr.map(val => {
        if (val >= 50 && val % 2 === 0) return val / 2;
        else if (val < 50 && val % 2 !== 0) return val * 2;
        else return val;
    })
}