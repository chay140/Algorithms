function solution(order) {
    return [...String(order)].filter(num => num.match(/[369]/)).length;
}