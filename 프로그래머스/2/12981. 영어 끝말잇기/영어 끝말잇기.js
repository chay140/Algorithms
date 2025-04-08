function solution(n, words) {
    const history ={}
    let turn = 1;
    
    for (let i = 0; i < words.length; i++) {
        const person = (i + 1) % n || n; 
        
        // 끝말잇기 체크
        if (i !== 0 && words[i-1].slice(-1) !== words[i].slice(0, 1)) {
            return [person, turn]
        }
        
        // 이전의 단어 존재했는지 체크
        if (words.indexOf(words[i]) !== i) {
            return [person, turn]
        }
        
        // 문제 없으면 history 업데이트
        if (history[person]) {
            history[person].push(words[i]);
        } else {
            history[person] = [words[i]]
        }
        
        // 차례 순서 업데이트
        person === n && turn++;
    }

    return [0, 0];
}