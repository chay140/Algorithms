function solution(num_list) {
    const [a, b] = num_list.slice(-2);
    if (a < b) num_list.push(b - a);
    else if (a >= b) num_list.push(b * 2);
    
    return num_list;
}