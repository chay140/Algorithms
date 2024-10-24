function solution(arr1, arr2) {
    let answer = [];
    
    arr1.forEach((element, i) => {
        const temp_element = [];
        element.forEach((number, j) => {
            temp_element.push(number + arr2[i][j]);
        });
        answer.push(temp_element);
    });
    return answer;
}