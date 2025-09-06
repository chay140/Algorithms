function solution(record) {
    const id_map = new Map();
    
    for (const r of record) {
        const data = r.split(" ");
        
        if (/^(Enter|Change)$/.test(data[0])) {
            id_map.set(data[1], data[2]);
        }
    }
    
    const answer = [];
    for (const r of record) {
        const [command, id] = r.split(" ");
        
        if (command === "Enter") {
            answer.push(`${id_map.get(id)}님이 들어왔습니다.`);
        } else if (command === "Leave") {
            answer.push(`${id_map.get(id)}님이 나갔습니다.`);
        } else continue;
    }
    
    return answer;
}