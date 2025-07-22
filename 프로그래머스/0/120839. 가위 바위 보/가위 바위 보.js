function solution(rsp) {
    const win = {
        "0": "5",
        "5": "2",
        "2": "0"
    }
    
    return rsp.split("").reduce((acc, curr) => acc + win[curr], "");
}