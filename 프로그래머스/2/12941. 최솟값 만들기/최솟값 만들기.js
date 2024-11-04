function solution(A,B){
    let answer = 0;

    // 가장 최솟값을 포함하는 배열 지정
    let [ascending_arr, descending_arr] = Math.min(...A) > Math.min(...B) ? [[...B], [...A]] : [[...A], [...B]];
    
    // 이름에 따라 오름/내림 차순 정렬
    ascending_arr.sort((a,b) => a - b);
    descending_arr.sort((a,b) => b - a);
    
    // 곱의 누적
    for (let i = 0; i < ascending_arr.length; i++) {
        answer += ascending_arr[i] * descending_arr[i]
    }

    return answer;
}