function solution(my_string) {
    const set = new Set();
    
    for (let i = 1; i <= my_string.length; i++) set.add(my_string.slice(-i));
    
    return Array.from(set).sort();
}