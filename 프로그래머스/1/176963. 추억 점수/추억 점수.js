function solution(name, yearning, photo) {
    let answer = [];
    let yearning_rate = {};
    
    for (let i = 0; i < name.length; i++) {
        yearning_rate[name[i]] = yearning[i];
    }
    
    photo.forEach(pic => {
        let score = 0;
        for (const person of pic) {
            if (yearning_rate[person]) score += yearning_rate[person];
        }
        answer.push(score);
    })
    
    return answer;
}