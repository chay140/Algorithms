function solution(num_list) {
    let odds = 0;
    let evens = 0;
    num_list.forEach((val, idx) => {
        if (idx % 2 === 0) evens += val;
        else odds += val;
    });

    return Math.max(odds, evens);
}