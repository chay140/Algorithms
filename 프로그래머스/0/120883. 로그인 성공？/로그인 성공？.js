function solution(id_pw, db) {
    const ids = [];
    const pws = [];
    db.forEach(([id, pw]) => {
        ids.push(id);
        pws.push(pw);
    });
    
    if (!ids.includes(id_pw[0])) {
        return "fail";
    }
    
    const target_idx = ids.indexOf(id_pw[0]);
    const possible_pw = pws[target_idx];
    
    return possible_pw === id_pw[1] ? "login" : "wrong pw";
}