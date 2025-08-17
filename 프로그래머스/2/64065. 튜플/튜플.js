function solution(s) {
    const map = new Map();
    let answer = new Set();
    
    s = s.slice(2, s.length - 2).split("},{");
    
    s.forEach(element => {
        const temp = element.split(",").map(string => Number(string));
        map.set(temp.length, temp);
    })
    
    for (let i = 1; i <= map.size; i++) {
        answer = new Set([...answer, ...map.get(i)]);
    }
    
    return Array.from(answer);
}