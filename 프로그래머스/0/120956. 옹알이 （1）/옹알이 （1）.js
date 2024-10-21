function solution(babbling) {
    let doable_words = ["aya", "ye", "woo", "ma"];
    let answer = 0;

    babbling.forEach(babble => {
        doable_words.forEach(word => {
            babble = babble.replace(word, " ");
        });
        
        if (babble.trim() === "") {
            answer++;
        }
    });
    
    return answer;
}