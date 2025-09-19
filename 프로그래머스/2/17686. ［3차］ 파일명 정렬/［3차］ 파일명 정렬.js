function solution(files) {
    const answer = [];
    
    for (const file of files) {
        // 각 파일명을 돌며
        let [fullName, head, number] = file.match(/^(\D+)([0-9]+)(.*)$/);
        // console.log(file.match(/^(\D+)([0-9]+)(.*)$/))
        answer.push([fullName, head.toLowerCase(), +number]);
    }
    
    // 정렬
    answer.sort((a, b) => {
        // 1. 문자열 비교
        const alphaCompare = a[1].localeCompare(b[1]);
        if (alphaCompare !== 0) return alphaCompare;

        // 2. 숫자 순 (숫자 비교)
        return a[2] - b[2];
    })
    
    return answer.map(e => e[0]);
}