function solution(plans) {
  plans.sort((a, b) => (a[1] > b[1] ? 1 : -1));

  const convert_time = (time) => {
    const [hour, min] = time.split(":").map(Number);
    return hour * 60 + min;
  };

  const finished_tasks = [];
  const unfinished_tasks = [];

  let i = 0;
  while (finished_tasks.length < plans.length) {
    const [curr_task, curr_time, curr_duration] = [
      plans[i][0],
      convert_time(plans[i][1]),
      Number(plans[i][2]),
    ];
    const next_task_time = plans[i + 1]
      ? convert_time(plans[i + 1][1])
      : Infinity;
    const available_time = next_task_time - curr_time;

    if (curr_duration <= available_time) {
      finished_tasks.push(curr_task);
      if (available_time > curr_duration && unfinished_tasks.length > 0) {
        let left_time = available_time - curr_duration;
        while (left_time > 0 && unfinished_tasks.length > 0) {
          const [unfinished, remaining] = unfinished_tasks.pop();
          if (remaining <= left_time) {
            finished_tasks.push(unfinished);
            left_time -= remaining;
          } else {
            unfinished_tasks.push([unfinished, remaining - left_time]);
            break;
          }
        }
      }
      i++;
    } else {
      unfinished_tasks.push([curr_task, curr_duration - available_time]);
      i++;
    }
  }

  while (unfinished_tasks.length > 0) {
    finished_tasks.push(unfinished_tasks.pop()[0]);
  }

  return finished_tasks;
}