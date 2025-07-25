function solution(my_string) {
    const string_set = new Set([...my_string]);
    return Array.from(string_set).join("");
}