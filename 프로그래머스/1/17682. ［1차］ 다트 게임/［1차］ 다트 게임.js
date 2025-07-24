function solution(dartResult) {
    const breakpoint = /\d{1,2}[SDT]|[*#]/g;
    let results = dartResult.match(breakpoint);
    const bonus_table = {
        "S": 1,
        "D": 2,
        "T": 3,
    }

    let total = []
    
    for (let i = 0; i < results.length; i++) {
        const round = results[i];
        const total_len = total.length;
        if (round === "*") {
            total[total_len - 1] *= 2;
            if (i !== 1) total[total_len - 2] *= 2;
        } else if (round === "#") {
            total[total_len - 1] *= -1;
        } else {
            const bonus = round.slice(-1);
            const score = Number(round.slice(0, round.length - 1));
            
            total.push(Math.pow(score, bonus_table[bonus]));
        }
    }
    
    
    return total.reduce((acc, curr) => acc + curr, 0)
}