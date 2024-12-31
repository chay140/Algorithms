function solution(video_len, pos, op_start, op_end, commands) {    
    const convert_time = (str) => {
        const [min, sec] = str.split(":");
        return Number(min) * 60 + Number(sec);
    }
    
    
    let answer = convert_time(pos);
    const len_time = convert_time(video_len);
    const start_time = convert_time(op_start);
    const end_time = convert_time(op_end);
    
    // 자동 오프닝 건너뛰기
    const auto_op_end = (time) => {
        return (time >= start_time && time <= end_time) ? end_time : time;
    };

    // 시작 위치가 오프닝인 경우
    answer = auto_op_end(answer);
    
    commands.forEach((command) => {
        if (command === "next") {
            answer = Math.min(answer + 10, len_time);
        } else if (command === "prev") {
            answer = Math.max(answer - 10, 0);
        };
        answer = auto_op_end(answer);
    })
    
    // 실행 후 위치가 오프닝인 경우
    if (answer >= start_time && answer <= end_time) answer = end_time;
        
    // str로 바꾸기
    const m = Math.floor(answer / 60);
    const s = answer % 60
    
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}