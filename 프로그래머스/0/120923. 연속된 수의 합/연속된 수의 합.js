function solution(num, total) {
    let answer = [];
    const min = Math.round(total/num - num/2);
    const max = Math.round(total/num + num/2);
    for(let i = min; i < max; i++) answer.push(i);
    return answer;
}