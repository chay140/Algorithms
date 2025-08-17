function solution(s) {
    const map = new Map();
    let answer = new Set();
    // 중괄호 제거
    s = s.slice(2, s.length - 2).split("},{");
    // 각 집합의 길이가 key, 집합(배열)이 value인 맵 작성
    s.forEach(element => {
        const temp = element.split(",").map(string => Number(string));
        map.set(temp.length, temp);
    })
    // 작은 key부터 Set + spread 로 중복값 위치 상관 없이 추가
    for (let i = 1; i <= map.size; i++) {
        answer = new Set([...answer, ...map.get(i)]);
    }
    // 배열로 변환
    return Array.from(answer);
}