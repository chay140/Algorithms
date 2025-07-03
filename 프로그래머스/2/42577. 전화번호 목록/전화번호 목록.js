function solution(phone_book) {
    // 해시 사용 없이 푸는 버전
    // 정렬
    phone_book.sort();
    
    // 인접한 두 번호 비교 (정렬로 최대한 비슷한 번호들이 인접)
    for (let i = 0; i < phone_book.length - 1; i++) {
        if (phone_book[i + 1].startsWith(phone_book[i])) {
            return false;
        }
    }
    
    return true;
}