function solution(n, lost, reserve) {
    // lost_num 잃어버린 학생 수
    let lost_num = lost.length;
  
    // 두 리스트 오름차순 정렬
    lost.sort((a,b) => a - b);
    reserve.sort((a,b) => a - b);
    
    // 여벌이 있었지만 도난당한 친구 찾기
    const lost_extra = reserve.filter((student1) => lost.some((student2) => {
        return student1 === student2;
    }));

    // lost_extra 두 리스트에서 제외
    lost_extra.forEach((student) => {
        lost.splice(lost.indexOf(student),1);
        reserve.splice(reserve.indexOf(student),1);
    });
    lost_num -= lost_extra.length;
    
    // 빌려줄 수 있는 여벌 찾기
    lost.forEach((lost_student) => {
        const possible_prev_student = reserve.indexOf(lost_student - 1);
        const possible_next_student = reserve.indexOf(lost_student + 1);
        if (possible_prev_student > -1) {
            lost_num -= 1;
            reserve.splice(possible_prev_student, 1);
        } else if (possible_next_student > -1) {
            lost_num -= 1;
            reserve.splice(possible_next_student, 1);
        }            
    });
    
    // 총 학생 수에서 아직도 체육복이 없는 학생 수 빼기
    return n - lost_num;
}