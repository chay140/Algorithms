function solution(a, b) {
    let days = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    
    const full_month_to_days = (month) => {
        switch(month) {
            case 2:
                return 29;
            case 4: case 6: case 9: case 11:
                return 30;
            default:
                return 31;  
        }
    }    
    let total_days = 0;
    for (let i = 1; i < a; i++) {
        total_days += full_month_to_days(i);
    }
    total_days += b;
    let day_i = total_days % 7;
    
    return days[day_i];    
}