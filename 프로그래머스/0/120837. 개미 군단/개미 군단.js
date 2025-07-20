function solution(hp) {
    const ant_attack = [5, 3, 1];
    let total = 0;
    
    for (const ant of ant_attack) {
        total += ~~(hp/ant);
        hp = hp % ant;
        
        if (hp === 0) break;
    }
    
    return total;
}