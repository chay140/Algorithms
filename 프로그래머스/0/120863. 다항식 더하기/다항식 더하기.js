function solution(polynomial) {
    const variables = polynomial.split(" + ");
    let x = 0;
    let n = 0;
    let answer = "";
    
    for (let v of variables) {
        if (v.includes("x")) x += v.length > 1 ? Number(v.split("x")[0]) : 1;
        else n += Number(v);
    }
    
    if (x > 1) answer += `${x}x`
    else if (x > 0) answer += `x`
    if (x > 0 && n > 0) answer += " + "
    if (n > 0) answer += `${n}`
    
    return answer;
}