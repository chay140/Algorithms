function solution(s) {   
    const numbers = s.split(" ");

    // array spread 하는거 잊지 말기
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    return `${min} ${max}`;
}