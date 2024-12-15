function solution(today, terms, privacies) {
    let answer = [];
    
    // 날짜 변환 (비교 쉽도록)
    const date_convert = (date) => {
        const [y, m, d] = date.split('.');
        return Number(y) * 12 * 28 + Number(m) * 28 + Number(d);
    }
    
    // 객체로 정리
    let terms_dic = {}
    terms.forEach((term) => terms_dic[term.split(' ')[0]] = Number(term.split(' ')[1]))
    
    // 유효 기간 traversing
    for (let i = 0; i < privacies.length; i++) {
        const [date, term] = privacies[i].split(' ');
        date_convert(date) + terms_dic[term] * 28 <= date_convert(today) && answer.push(i+1)
    }
        
    return answer;
}