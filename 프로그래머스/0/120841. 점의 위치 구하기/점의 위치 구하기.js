function solution(dot) {
    // "xy"
    const quadrants = {
        "++": 1,
        "-+": 2,
        "--": 3,
        "+-": 4,
    }
    
    let key = "";
    for (const coor of dot) {
        if (coor > 0) key += "+";
        else key += "-"
    }
    
    return quadrants[key];
}