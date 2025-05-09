function solution(progresses, speeds) {
    let answer = [];
    let totalProgress = 0;
    let index = 0;
    
    while (totalProgress < progresses.length) {
        let todayDone = 0;
        // 하루 진행
        progresses = progresses.map((value, i) => value + speeds[i]);
        
        // 100 달성 찾기?
        while (progresses[index] >= 100) {
            todayDone += 1;
            index ++;
        }
        
        totalProgress += todayDone;
        if (todayDone > 0) answer.push(todayDone);
    }
    
    
    return answer;
}