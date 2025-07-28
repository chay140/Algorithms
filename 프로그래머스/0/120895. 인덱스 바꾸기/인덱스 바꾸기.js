function solution(my_string, num1, num2) {
    let str_copy = [...my_string]
    const num1_char = str_copy[num1];
    
    str_copy[num1] = str_copy[num2];
    str_copy[num2] = num1_char;
    
    return str_copy.join("");
}