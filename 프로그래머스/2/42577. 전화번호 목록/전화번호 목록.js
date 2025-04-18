function solution(phone_book) {
    let answer = true;
    const set = new Set(phone_book);
    
    for (let number of set) {
        for (let i = 0; i < number.length - 1; i++) {
            const prefix = number.slice(0, i + 1);
                        
            if (set.has(prefix)) {
                answer = false;
                break;
            }
        }
    }
    return answer;
}