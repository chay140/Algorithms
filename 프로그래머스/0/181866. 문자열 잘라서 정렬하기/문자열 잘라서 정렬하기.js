function solution(myString) {
    return myString.split("x").filter(word => word !== "").sort();
}