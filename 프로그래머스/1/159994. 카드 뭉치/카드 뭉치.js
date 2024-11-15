function solution(cards1, cards2, goal) {
    let answer = "Yes";
    let temp = []
    
    let i = 0;
    while (temp.length < goal.length) {
        if (cards1[0] === goal[i]) {
            temp.push(cards1.shift());
        } else if (cards2[0] === goal[i]) {
            temp.push(cards2.shift());
        } else {
            answer = "No";
            break;
        }
        i++;
    }
    return answer;
}