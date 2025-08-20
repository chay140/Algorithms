function solution(my_string, target) {
    for (let i = 0; i < my_string.length; i++) {
        for (let j = i + 1; j <= my_string.length; j++) {
            if (my_string.substring(i, j) === target) return 1;
        }
    }
    return 0;
}