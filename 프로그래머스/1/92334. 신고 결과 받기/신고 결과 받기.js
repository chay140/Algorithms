function solution(id_list, report, k) {
    // 유저에게 신고 당한 횟수
    let got_reports = {}
    
    // 어떤 유저를 신고했는지
    let sent_reports = {}
    
    // 정지 당한 계정
    let stopped_ids = []
    
    // initialization
    id_list.forEach((id) => {
        got_reports[id] = 0;
        sent_reports[id] = [];
    })
    
    // 신고 처리
    report.forEach((r) => {
        const [user, reporting] = r.split(" ");
        if (!sent_reports[user].includes(reporting)) {
            sent_reports[user].push(reporting);
            got_reports[reporting] += 1;
            
            if (got_reports[reporting] >= k && !stopped_ids.includes(reporting)) {
                stopped_ids.push(reporting);
            }
        }
    })
    
    // 메일 수 정리
    const answer = Object.values(sent_reports).map((values) => {
        let total_email = 0;
        stopped_ids.forEach((stopped) => {
            if (values.includes(stopped)) total_email += 1;
        })
        return total_email;
    })
    
    return answer;
}