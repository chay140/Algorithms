function solution(arr1, arr2) {
    const answer = Array.from({length: arr1.length}, () => new Array(arr2[0].length).fill(0));
    // 아래의 방법은 독립된 배열을 만들지 못함
    // const answer = new Array(arr1.length).fill(new Array(arr2[0].length).fill(0));
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr2.length; k++) {
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    
    return answer;
}