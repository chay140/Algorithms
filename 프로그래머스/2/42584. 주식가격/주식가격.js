function solution(prices) {
    const answer = new Array(prices.length).fill(-1);
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        // stack에 가장 최근 추가한 index 값에서 현재값이 하락했다면
        while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
            const top = stack.pop();
            answer[top] = i - top;
        }
        stack.push(i);
    }
    
    // stack에 남은 가격
    while (stack.length) {
        const last = stack.pop();
        answer[last] = prices.length - last - 1;
    }
    
    return answer;
}