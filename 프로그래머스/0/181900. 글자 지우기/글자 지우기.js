function solution(my_string, indices) {
    return [...my_string].filter((val, index) => !indices.includes(index)).join("");
}