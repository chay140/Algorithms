function solution(participant, completion) {
    // 해시를 이용한 방법
    const hash_map = new Map();
    
    // 참가자 map에 등록
    participant.forEach((element) => {
        // 동명이인의 경우
        if (hash_map.get(element)) {
            hash_map.set(element, hash_map.get(element) + 1);
        } else {
            // 최초의 이름인 경우
            hash_map.set(element, 1);
        }
    })
    
    // 완주 선수 체크
    completion.forEach((element) => {
        hash_map.set(element, hash_map.get(element) - 1);
    })
    
    // 1인 선수 찾기
    const sorted = [...hash_map.entries()].sort((a, b) => b[1] - a[1]);
    
    return sorted[0][0];
}