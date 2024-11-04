function solution(s) {    
    // dictionary로 매핑
    const str_to_num = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9
    }
    
    let copy = s;
    Object.keys(str_to_num).forEach(function(key) {
        if (s.includes(key) > 0) {
            copy = copy.replaceAll(key, str_to_num[key]);
        }
    })
    
    return Number(copy);
}