function solution(numLog) {
    const operations = {
        "1": "w",
        "-1": "s",
        "10": "d",
        "-10": "a"
    }
    
    return numLog.slice(1).map((val, idx) => operations[val - numLog[idx]]).join("")
}