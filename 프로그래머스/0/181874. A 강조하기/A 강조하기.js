function solution(myString) {
    return [...myString].map(char => char.toLowerCase() === "a" ? "A" : char.toLowerCase()).join("")
}