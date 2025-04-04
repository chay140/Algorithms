function solution(friends, gifts) {
    let giveAndTakes = Array.from({length: friends.length}, (_) => Array(friends.length).fill(0));
    let giftRates = {}
    let nextMonthGift = {}
    
    // 정보 수집
    friends.forEach((friend) => {        
        giftRates[friend] = 0
        nextMonthGift[friend] = 0;
    });
    
    gifts.forEach((gift) => {
        const [friend1, friend2] = gift.split(" ");
        const ind1 = friends.indexOf(friend1);
        const ind2 = friends.indexOf(friend2);
        giveAndTakes[ind1][ind2] += 1;
        giftRates[friend1] += 1;
        giftRates[friend2] -= 1;
    })
    
    // 다음 달 많이 받을 사람 찾기
    for (let i = 0; i < giveAndTakes.length; i++) {
        const friend1 = friends[i];
        for (let j = i + 1; j < giveAndTakes[0].length; j++) {            
            const friend2 = friends[j];
            // 선물 기록 X 선물 지수가 더 큰 사람 찾기
            if (giveAndTakes[i][j] === giveAndTakes[j][i]) {
                if (giftRates[friend1] === giftRates[friend2]) continue;
                
                giftRates[friend1] > giftRates[friend2] ? nextMonthGift[friend1] += 1 : nextMonthGift[friend2] += 1;
            } else if (giveAndTakes[i][j] !== 0 || giveAndTakes[j][i] !== 0) {  // 선물 기록이 한쪽이라도 있을때
                giveAndTakes[i][j] > giveAndTakes[j][i] ? nextMonthGift[friend1] += 1 : nextMonthGift[friend2] += 1;
            } 
        }
    }
    
    // 가장 많이 받는 수 반환
    return Math.max(...Object.values(nextMonthGift));
}