function solution(num_str) {
    return [...num_str].reduce((acc, curr) => acc + Number(curr), 0);
}