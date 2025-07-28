function solution(num_list) {
    const odd_sum = num_list.filter((_, idx) => idx % 2 === 1).reduce((acc, curr) => acc + curr, 0);
    const even_sum = num_list.filter((_, idx) => idx % 2 === 0).reduce((acc, curr) => acc + curr, 0);

    return Math.max(odd_sum, even_sum);
}