function solution(my_string, is_suffix) {
    const set = new Set(Array(my_string.length).fill(0).map((_, idx) => my_string.slice(-(idx + 1))));
    
    return set.has(is_suffix) ? 1 : 0;
}