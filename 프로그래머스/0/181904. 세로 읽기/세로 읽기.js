function solution(my_string, m, c) {
    const twoDarray = [];
    for (let i = 0; i < my_string.length; i += m) {
        const row = my_string.slice(i, i + m).split("")
        twoDarray.push(row);
    }
    
    return twoDarray.map(row => row[c - 1]).join("");
}