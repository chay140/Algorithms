function solution(myString, pat) {
    let answer = "";
    for (let i = 0; i < myString.length; i++) {
        for (let j = i; j <= myString.length; j++) {
            if (myString.substring(i, j).length > answer.length && myString.substring(i, j).endsWith(pat)) {
                answer = myString.substring(i, j);
            }
        }
    }
    
    return answer;
}