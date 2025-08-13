function solution(chicken) {
    let total = 0;
    let coupon = chicken;
    
    do {
        total += ~~(coupon / 10);
        coupon = ~~(coupon / 10) + coupon % 10;
    } while (coupon >= 10);
    
    return total;
}