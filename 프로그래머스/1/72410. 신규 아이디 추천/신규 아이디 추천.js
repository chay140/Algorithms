function solution(new_id) {
    let recommend = ""
    // 1st + 2nd
    recommend = [...new_id.toLowerCase()].filter(char => char.match(/[A-Za-z0-9-_.]/)).join("");
    // 3rd
    recommend = recommend.replace(/\.{2,}/g, ".");     // replaceAll은 /g가 필수
    // 4th
    if (recommend[0] === ".") recommend = recommend.slice(1);
    if (recommend.slice(-1) === ".") recommend = recommend.slice(0, recommend.length - 1);
    // 5th
    if (recommend === "") recommend += "a";
    // 6th
    if (recommend.length > 15) recommend = recommend.slice(0, 15);
    if (recommend.slice(-1) === ".") recommend = recommend.slice(0, recommend.length - 1);
    // 7th
    if (recommend.length < 3) {
        const repeat_n = 3 - recommend.length;
        recommend += recommend.slice(-1).repeat(repeat_n);
    }
    
    return recommend
}