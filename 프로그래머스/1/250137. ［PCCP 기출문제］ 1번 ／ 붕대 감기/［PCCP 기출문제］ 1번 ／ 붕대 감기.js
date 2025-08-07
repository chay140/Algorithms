function solution(bandage, health, attacks) {
    // 0초 ~ 마지막 공격 시간까지 루프
    // 연속 성공 카운트
    let skill_success = 0;
    const max_health = health;
    const [time, health_per_sec, additional_health] = bandage;
    const max_time = attacks[attacks.length - 1][0];
    
    for (let i = 1; i <= max_time; i++) {
        // 공격이 들어오는 경우
        if (attacks[0][0] === i) {
            health -= attacks[0][1];
            attacks.shift();
            skill_success = 0;
        } else {
            // 공격이 없는 경우
            skill_success++;
            health = Math.min(max_health, health + health_per_sec);
            
            // 스킬 성공인 경우
            if (skill_success === time) {
                skill_success = 0;
                health = Math.min(max_health, health + additional_health);
            }
        }
        
        if (health <= 0) return -1;
    }
    
    return health;
}