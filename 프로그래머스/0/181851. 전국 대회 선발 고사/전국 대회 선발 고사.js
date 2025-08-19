function solution(rank, attendance) {
    const three_students = [];
    
    for (let i = 1; i <= rank.length; i++) {
        const stu_idx = rank.indexOf(i);
        if (attendance[stu_idx]) three_students.push(stu_idx);
        
        if (three_students.length === 3) break;
    }
    
    const [a, b, c] = three_students;
    return 10000 * a + 100 * b + c;
}