function solution(lines) {
    const coordinates = new Array(201).fill(0);
    
    lines.forEach(([x, y]) => {
        for (let i = x; i < y; i++) {
            coordinates[i + 100] += 1;
        }
    })
    
    return coordinates.filter(point => point > 1).length;
}