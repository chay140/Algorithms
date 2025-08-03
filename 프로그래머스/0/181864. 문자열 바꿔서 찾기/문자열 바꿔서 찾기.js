function solution(myString, pat) {
    const newString = [...myString].map(char => char === "A" ? "B" : "A").join("");
    
    return Number(newString.includes(pat));
}