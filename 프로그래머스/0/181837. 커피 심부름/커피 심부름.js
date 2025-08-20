function solution(order) {
    const AMERICANO = 4500;
    const LATTE = 5000;
    let total = 0;
    
    order.forEach(cofee => {
        if (cofee.includes("latte")) total += LATTE;
        else total += AMERICANO
    })
    
    return total;
}