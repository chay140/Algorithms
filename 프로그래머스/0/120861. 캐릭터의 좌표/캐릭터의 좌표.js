function solution(keyinput, board) {
    const directions = {
        left: [-1, 0],
        right: [1, 0],
        up: [0, 1],
        down: [0, -1]
    }
    
    let curr_pos = [0, 0];
    
    const [width, height] = board;
    const half_w = (width - 1) / 2;
    const half_h = (height - 1) / 2;
    for (const dir of keyinput) {
        curr_pos[0] += directions[dir][0];
        curr_pos[1] += directions[dir][1];
        
        
        if (Math.abs(curr_pos[0]) > half_w) {
            curr_pos[0] = curr_pos[0] < 0 ? -half_w : half_w;
        }
        if (Math.abs(curr_pos[1]) > half_h) {
            curr_pos[1] = curr_pos[1] < 0 ? -half_h : half_h;
        }
    }
    
    return curr_pos;
}