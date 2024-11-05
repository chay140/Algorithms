function solution(s) {  
    let words = s.split(" ");
        
    words = words.map((w) => {
        let temp = w;       
        
        if (w.length > 0) {
            let first_letter = w[0];
            if (!Number(w[0])) {
                first_letter = first_letter.toUpperCase();
            }
            temp = [first_letter, ...w.slice(1).toLowerCase()].join('');
        }

        return temp;
    });
    
    return words.join(" ");
}