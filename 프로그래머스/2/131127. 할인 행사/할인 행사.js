function solution(want, number, discount) {
    // 가능한 일수
    let answer = 0;
    
    // 1. 10일씩 slice하는 for loop
    for (let i = 0; i <= discount.length - 10; i++) {
        const tenDays = discount.slice(i, i + 10);
        
        // 2. want와 number의 수량과 일치하는지 확인
        for (let j = 0; j < want.length; j++) {
            
            const found = tenDays.filter((product) => want[j] === product);
            
            // 일치하지 않는 경우가 있다면 다음 tenDays 확인
            if (found.length !== number[j]) break;
            
            // 모두 일치한다면
            if (j === want.length - 1) answer++;
        }
        
    }
    
    return answer;
}