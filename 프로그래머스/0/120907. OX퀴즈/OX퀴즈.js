function solution(quiz) {
    const answer = [];
    
    for (const q of quiz) {
        const [x, op, y, _, z] = q.split(" ");
        
        const correct = op === "+" ? Number(x) + Number(y) : Number(x) - Number(y);
        
        if (correct === Number(z)) answer.push("O");
        else answer.push("X")
    }
    
    return answer;
}