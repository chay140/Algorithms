function solution(my_string, queries) {
    let answer = my_string.split("");
    
    queries.forEach(([start, end] )=> {
        answer = [...answer.slice(0, start), ...answer.slice(start, end + 1).reverse(), ...answer.slice(end + 1)];
    })
    
    return answer.join("");
}