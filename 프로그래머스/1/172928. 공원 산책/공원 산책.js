function solution(park, routes) {
    let answer = [];
    const directions = {E: [0, 1], W: [0, -1], S: [1, 0], N: [-1, 0]}
    
    const height = park.length;
    const width = park[0].length;
    
    // S 찾기
    for (let i = 0; i < park.length; i++) {
        park[i].indexOf("S") > -1 && answer.push(i, park[i].indexOf("S"))
        if (answer.length > 0) break;
    }
    
    // 경로 따라 이행
    routes.forEach((route) => {
        const [dir, len] = route.split(" ");
        let [sx, sy] = answer;
        let step = 0;
        while (step < Number(len)) {
            sx += directions[dir][0]
            sy += directions[dir][1]
            
            if (sx >= height || sx < 0 || sy >= width || sy < 0 || park[sx][sy] === "X") break;
            
            step++;
        }
        
        if (step === Number(len)) answer = [sx, sy];
    });

    
    return answer;
}