function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"];
    let answer = 0;
    
    for (let i = 0; i < word.length; i++) {
        const index = vowels.indexOf(word[i]);
        answer += (index * (Math.pow(5, 5 - i) - 1)) / (5 - 1);
        answer++;
    }
    
    return answer;
}