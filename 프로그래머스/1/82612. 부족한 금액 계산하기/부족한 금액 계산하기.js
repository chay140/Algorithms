function solution(price, money, count) {
    let answer = -1;
    
    let required = 0;
    for (let i = 1; i <= count; i++) {
        required += price * i;
    }
    
    if (money - required < 0) {
        return Math.abs(money - required);
    } else {
        return 0;
    }

    return answer;
}