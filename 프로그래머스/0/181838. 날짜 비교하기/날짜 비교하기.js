function solution(date1, date2) {
    const [y1, m1, d1] = date1;
    const [y2, m2, d2] = date2;
    
    if (y1 < y2) return 1;
    else if (y1 === y2 && m1 < m2) return 1;
    else if (y1 === y2 && m1 === m2 && d1 < d2) return 1;
    
    return 0;
}