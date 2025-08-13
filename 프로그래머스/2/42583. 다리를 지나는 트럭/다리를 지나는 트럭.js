function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const bridge = new Array(bridge_length).fill(0);
    let bridge_weight = 0;
    
    while (truck_weights.length > 0 || bridge_weight > 0) {
        time++;
        bridge_weight -= bridge.pop();
        let to_be_added = 0;
        
        // 무게 추가가 가능한 경우
        if (bridge_weight + truck_weights[0] <= weight) {
            bridge_weight += truck_weights[0];
            to_be_added = truck_weights.shift();
        }
        
        bridge.unshift(to_be_added);
    }
    
    return time;
}