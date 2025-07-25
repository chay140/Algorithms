function solution(numbers, hand) {
    // 거리 구하기    
    // curr: string, target: number
    const getDistance = (curr, target) => {
        let diff = Math.abs(target - Number(curr));
        return ~~(diff / 3) + diff % 3;
    }
    
    // 거리 계산을 위해 * = 10, 0 = 11, # = 12 로 만들기
    const curr_hands = {
        "L": "10",
        "R": "12"
    };
    
    return numbers.map(number => {
        if (number === 0) number = 11;

        let key = ""
        if (String(number).match(/^([147])$/)) {
            key = "L"
        } else if (String(number).match(/^([369])$/)) {
            key = "R"
        } else {
            const left_distance = getDistance(curr_hands["L"], number);
            const right_distance = getDistance(curr_hands["R"], number);
            
            if (left_distance === right_distance) {
                key = hand[0].toUpperCase();
            } else {
                if (left_distance < right_distance) {
                    key = "L"
                } else {
                    key = "R"
                }
            }
        }
        curr_hands[key] = number;
        return key;
    }).join("");
}