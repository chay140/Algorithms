function solution(my_string) {
    const splited_str = my_string.split(" ");
    
    let answer = Number(splited_str[0]);
    for (let i = 1; i < splited_str.length; i += 2) {
        let next_num = Number(splited_str[i + 1]);
        
        splited_str[i] === "-" && (next_num *= -1);
        
        answer += next_num;
    }
    
    return answer;
}