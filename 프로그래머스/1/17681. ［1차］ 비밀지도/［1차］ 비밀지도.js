function solution(n, arr1, arr2) {
    let answer = [];
    
    for (let i = 0; i < n; i++) {
        const bin1 = parseInt(arr1[i].toString(2), 2);
        const bin2 = parseInt(arr2[i].toString(2), 2);
        
        let finalBin = (bin1 | bin2).toString(2).padStart(n, 0);
        finalBin = finalBin.replaceAll("1", "#");
        finalBin = finalBin.replaceAll("0", " ");
        answer.push(finalBin)
    }
    
    return answer;
}