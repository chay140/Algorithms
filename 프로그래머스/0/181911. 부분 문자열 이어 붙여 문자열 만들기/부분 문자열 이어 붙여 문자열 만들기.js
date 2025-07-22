function solution(my_strings, parts) {
    return my_strings.map((val, idx) => val.slice(parts[idx][0], parts[idx][1] + 1)).join("");
}