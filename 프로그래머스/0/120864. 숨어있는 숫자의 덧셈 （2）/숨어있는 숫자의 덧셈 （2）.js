function solution(my_string) {    
    const num_arr = my_string.split(/[a-zA-Z]/g).filter(char => char !== "");
    
    return num_arr.reduce((acc, curr) => acc + Number(curr), 0);
}