function solution(my_string) {
    const answer = [];
    for (const char of my_string) {
        if (char.match(/^([0-9])$/)) answer.push(Number(char));
    }
    
    if (answer.length === 0) return [0];
    return answer.sort((a, b) => a - b);
}