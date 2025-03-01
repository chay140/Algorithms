function solution(people, limit) {
    let answer = 0;
    
    // 내림차순
    people.sort((a, b) => a - b);
    
    // 투포인터
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        answer++;
    }
    
    return answer;
}