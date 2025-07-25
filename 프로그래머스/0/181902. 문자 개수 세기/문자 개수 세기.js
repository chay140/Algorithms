function solution(my_string) {
    const alphabet_arr = new Array(52).fill(0)
    
    for (const char of my_string) {
        let index = char.charCodeAt(0);
        
        if (char === char.toUpperCase()) index -= 65;
        if (char === char.toLowerCase()) index -= 71;
            
        alphabet_arr[index] += 1;
    }
    
    return alphabet_arr;
}