function solution(num_list) {
    let odds = Number(num_list.filter((val) => val % 2 !== 0).join(""));
    let evens = Number(num_list.filter((val) => val % 2 === 0).join(""));
    
    return odds + evens;
}