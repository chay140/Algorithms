function solution(age) {
    let answer = []
    
    while (age > 0) {
        answer.push(String.fromCharCode((age % 10) + 97));
        
        age = ~~(age / 10)
    }
    
    return answer.reverse().join("");
}