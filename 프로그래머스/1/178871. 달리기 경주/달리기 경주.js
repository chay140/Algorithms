function solution(players, callings) {
    // 복사본
    let answers = players.map((player) => player);
    
    let players_obj = {}
    players.forEach((player, i) => players_obj[player] = i);
    
    // 완전 탐색 -> 시간 초과
//     for (let i = 0; i < callings.length; i++) {        
//         const target_index = answer.indexOf(callings[i]);
        
//         const temp = answer[target_index - 1];
//         answer[target_index - 1] = callings[i];
//         answer[target_index] = temp;
//     }
    
    // 2안
//     for (let i = 0; i < answer.length; i++) {
//         const count = callings.filter((player) => answer[i] === player).length;
//         const curr_player = answer[i];
        
//         answer.splice(answer.indexOf(answer[i]), 1)
//         answer.splice(i - count, 0, curr_player);   
//     }
    
    // 3안
    // indexOf가 순회를 하면서 찾기 때문에 시간 복잡도가 크다
    for (let i = 0; i < callings.length; i++) {
        const target_i = players_obj[callings[i]];
        const temp = answers[target_i - 1];
        
        // 바꾸기
        answers[target_i - 1] = callings[i];
        answers[target_i] = temp;
        
        // 사전도 변경
        players_obj[callings[i]] -= 1;
        players_obj[temp] += 1;
    }
    
    return answers;
}