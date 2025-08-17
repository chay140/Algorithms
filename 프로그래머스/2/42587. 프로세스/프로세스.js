function solution(priorities, location) {
    let answer = 0;
    let wait_queue = new Array(priorities.length).fill().map((_, i) => i);
    
    while (wait_queue.length > 0) {
        const process_id = wait_queue.shift();
        const process_priority = priorities.shift();
        
        const max_priority = Math.max(...priorities)
        
        if (max_priority > process_priority) {
            wait_queue.push(process_id);
            priorities.push(process_priority);
        } else {
            answer++;
            
            if (process_id === location) break;
        }
    }
    
    return answer;
}