function solution(order) {
    return order.reduce((acc, curr) => acc + (curr.includes("latte") ? 5000 : 4500), 0);
}