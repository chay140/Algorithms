function solution(str_list, ex) {
    return str_list.filter(word => !word.includes(ex)).join("");
}