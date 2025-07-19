function solution(arr, queries) {
    let answer = [];
    
    for (const query of queries) {
        const sliced = arr.slice(query[0], query[1] + 1);
        let min = 1000001;
        
        for (let i = 0; i < sliced.length; i++) {
            if (sliced[i] > query[2] && sliced[i] < min) {
                min = sliced[i];
            } 
        }
        
        min === 1000001 ? answer.push(-1) : answer.push(min);
    }
    
    return answer;
}