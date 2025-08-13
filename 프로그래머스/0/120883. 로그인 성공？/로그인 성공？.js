function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const new_db = new Map(db);
    return new_db.has(id) ? (new_db.get(id) === pw ? "login" : "wrong pw") : "fail";
}