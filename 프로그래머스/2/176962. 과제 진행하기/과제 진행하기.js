function solution(plans) {
  // (1) 시작 시간 순으로 정렬

  // localeCompare를 이용한 방법
  // String 비교할때 적합 lexical order를 따름

  // plans.sort((a, b) => {
  //   return a.localeCompare(b);
  // });

  // 직접 대소 지정
  // sort() 함수에서 1 & -1의 의미
  //  1: a를 b 뒤에 둘 것 (a > b)
  // -1: a를 b 앞에 둘 것 (a < b)
  plans.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  const check_time = function (time) {
    const [hour, min] = time.split(":");
    return Number(hour) * 60 + Number(min);
  };

  let finished_tasks = [];
  let non_finished_tasks = [];

  let i = 0; // finished_tasks.length < plans.length
  while (finished_tasks.length < plans.length) {
    // 다음 과제가 존재
    if (plans[i + 1]) {
      // 현재 과제 이름
      const curr_task = plans[i][0];

      // 과제를 진행할 수 있는 시간 찾기
      const temp1 = check_time(plans[i + 1][1]);
      const temp2 = check_time(plans[i][1]);
      const diff = temp1 - temp2;

      // 빈 시간이 현재 과제시간 보다 적은 경우 (시간 부족)
      const curr_task_duration = Number(plans[i][2]);
      if (curr_task_duration === diff) {
        finished_tasks.push(curr_task);
        i++;
      } else if (curr_task_duration > diff) {
        // non_finished_taks에 정보 저장 -> 다음 과제 시작
        const unfin_task = [curr_task, curr_task_duration - diff];
        non_finished_tasks.push(unfin_task);
        i++;
      } else if (curr_task_duration < diff) {
        // 빈 시간이 현재 과제시간 보다 많은 경우 (시간 남음)
        // 풀다 만 과제 존재여부 확인
        finished_tasks.push(curr_task);
        if (non_finished_tasks.length === 0) {
          // 없을시 다음 과제 시작 시간에 맞춰 과제 시작
          i++;
        } else {
          // 있을시 마지막부터 순차적으로 완료
          let left_time = diff - curr_task_duration;
          do {
            // 못 끝낸 과제가 없다면!
            if (non_finished_tasks.length === 0) {
              left_time = 0;
              i++;
            } else {
              let unfin_temp = non_finished_tasks.pop();

              if (unfin_temp[1] === left_time) {
                finished_tasks.push(unfin_temp[0]);
                left_time = 0;
                i++;
              } else if (unfin_temp[1] > left_time) {
                unfin_temp[1] -= left_time;
                non_finished_tasks.push(unfin_temp);
                left_time = 0;
                i++;
              } else {
                // 반복
                left_time -= unfin_temp[1];
                finished_tasks.push(unfin_temp[0]);
              }
            }
          } while (left_time > 0);
        }
      }
    } else {
      // 마지막 과제 (다음 과제가 존재하지 않음)
      finished_tasks.push(plans[i][0]);

      // 못 끝낸 과제 차례대로
      while (non_finished_tasks.length) {
        finished_tasks.push(non_finished_tasks.pop()[0]);
      }
    }
  }

  return finished_tasks;
}