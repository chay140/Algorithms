function solution(n) {    
    const str_number = n.toString();
    const str_characters = str_number.split('');
    str_characters.sort().reverse();
    
    const new_n = str_characters.join('');
    
    return Number(new_n);
}