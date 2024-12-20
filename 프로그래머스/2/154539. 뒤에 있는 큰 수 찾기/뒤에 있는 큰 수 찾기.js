function solution(numbers) {
    // 모범 답안 참조
    const result = new Array(numbers.length).fill(-1);
    const stack = [];
    for (let i = 0; i < numbers.length; i++) {
        while (numbers[i] > numbers[stack.at(-1)]){
            const index = stack.pop()
            result[index] = numbers[i];
        }
            
        stack.push(i);
    }
    return result;
}