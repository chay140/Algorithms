function solution(my_string) {
    return [...my_string].filter(char => char.match(/\d/g)).reduce((acc, curr) => acc + Number(curr), 0);
}