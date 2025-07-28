function solution(todo_list, finished) {
    return todo_list.filter((val, idx) => !finished[idx]);
}