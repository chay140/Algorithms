function solution(food) {
    let left_order = [];
    
    for (let i = 1; i < food.length; i++) {
        for (let j = 1; j <= Math.floor(food[i]/2); j++) {
            left_order.push(i);
        }
    }
    const right_order = [...left_order].reverse();
    
    const answer = [...left_order, 0, ...right_order].join('');
    
    return answer;
}