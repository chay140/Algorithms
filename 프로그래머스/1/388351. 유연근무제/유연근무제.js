function solution(schedules, timelogs, startday) {
    // 정시출근한 직원 수
    let answer = 0;
    
    const valid_time = (time) => {
        let hour = ~~(time/100);
        let min = time % 100;
        
        min += 10;
        if (min >= 60) {
            hour++;
            min -= 60;
        }
        
        return hour * 100 + min;
    }
    
    // 각 직원마다 timelog를 본다
    // 시작일은 각 직원마다 다시 startday에서 시작하며 추적
    for (let i = 0; i < schedules.length; i++) {
        // 유효 시간 계산
        const valid_stamp = valid_time(schedules[i]);
        const curr_timelog = timelogs[i];
        
        let start = startday - 1;
        let flag = true;
        // 끝까지 지킨 직원 체크하는 것
        // 모든 시간이 valid_stamp 이하여야함
        for (let j = 0; j < curr_timelog.length; j++) {
            // 다음날 이동 체크
            start = start + 1 >= 8 ? 1 : start + 1;
            
            // 주말 건너뛰기
            if (start === 6 || start === 7) {
                continue;
            }
            // 평일 중 하루라도 맞지 않는 날이 존재한다면 break
            if (curr_timelog[j] > valid_stamp) {
                flag = false;
                break;
            };
        }
        
        if (flag) answer++;
    }
    
    return answer;
}