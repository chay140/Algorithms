function solution(fees, records) {
    // 정렬 차량번호가 작은순
    records = records.map(r => r.split(" "));
    records.sort((a, b) => a[1] - b[1]);    // 오름차순
    
    // {차량번호: [시각, 시각, 시각, ...]}
    const car_map = new Map();
    
    for (const r of records) {
        const times = car_map.get(r[1]) || [];
        times.push(r[0])
        car_map.set(r[1], times)
    }
    
    // 누적 시간 구하기
    const total_times = [];
    // 문자열 변환
    const str_to_time = (str_time) => {
        const [hour, min] = str_time.split(":");
        return Number(hour) * 60 + Number(min);
    }
    
    car_map.forEach(car_in_out => {
        // 마지막 출차가 없는 경우 23:59를 마지막으로 간주
        if (car_in_out.length % 2 !== 0) car_in_out.push('23:59');
        
        let total_time = 0;
        for (let i = 0; i < car_in_out.length; i += 2) {
            const start = str_to_time(car_in_out[i]);
            const end = str_to_time(car_in_out[i + 1]);
            const timeDiff = end - start;
            total_time += timeDiff;
        }
        total_times.push(total_time);
    })
    
    // 요금
    const calc_fee = (time) => {
        const extra_charge = time < fees[0] ? 0 : Math.ceil((time - fees[0]) / fees[2]) * fees[3];
        return fees[1] + extra_charge;
    }
    
    return total_times.map(time => calc_fee(time));
}