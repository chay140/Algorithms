function solution(phone_number) {
    let answer = phone_number.slice(-4);
    return answer.padStart(phone_number.length, "*");
}