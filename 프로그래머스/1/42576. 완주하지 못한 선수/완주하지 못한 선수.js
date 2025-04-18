function solution(participant, completion) {
    // completion.forEach((player) => {
    //     const index = participant.indexOf(player);
    //     participant.splice(index, 1);
    // })
    
    // return participant[0];
    
    participant.sort();
    completion.sort();

    for (let i = 0; i < completion.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
    }
    return participant.slice(-1)[0];
}