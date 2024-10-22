function solution(s) {
    let s_array = s.split("");
    s_array.sort().reverse();
    return s_array.join("");
}