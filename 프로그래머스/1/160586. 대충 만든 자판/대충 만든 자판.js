function solution(keymap, targets) {    
    let answer = targets.map((target) => {
        let total_count = 0;
        for (let i = 0; i < target.length; i++) {
            let count = Infinity;
            keymap.forEach((key) => {
                const possible_i = key.indexOf(target[i]);
                if (possible_i > -1) {
                    count = Math.min(count, possible_i + 1)
                }
            })
            total_count += count;
        }
        return total_count === Infinity ? -1 : total_count;
    })
    
    return answer;
}