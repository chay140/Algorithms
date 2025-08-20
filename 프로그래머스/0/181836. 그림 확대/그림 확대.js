function solution(picture, k) {
    const answer = [];
    
    picture.forEach(pic => {
        let newSize = "";
        for (const char of pic) newSize += char.repeat(k);
        for (let _ = 0; _ < k; _++) answer.push(newSize);
    })
    
    
    return answer;
}