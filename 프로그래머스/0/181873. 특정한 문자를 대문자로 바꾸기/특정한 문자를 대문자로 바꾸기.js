function solution(my_string, alp) {
    return [...my_string].map(char => char === alp ? alp.toUpperCase() : char.toLowerCase()).join("");
}