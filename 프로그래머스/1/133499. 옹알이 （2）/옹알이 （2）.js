function solution(babbling) {
    let answer = 0;
    const doable_words = ["aya", "ye", "woo", "ma"];
    
    babbling.forEach(babble => {
        console.log(babble)
        // 연속되는 옹알이 발견시 다음 단어 체크
        const consecutiveRegex = /(aya|ye|woo|ma)\1+/;
        if (consecutiveRegex.test(babble)) {
            return; 
        }
        
        // 1번만 등장하는 옹알이 제거
        doable_words.forEach(word => {
            babble = babble.replaceAll(new RegExp(word, "g"), " ");
        });
        
        if (babble.trim().length === 0) {
            console.log("answer up")
            answer ++;
        }
    });
    
    return answer;
}