function solution(array) {
    const map = new Map();
    
    for (const item of array) {
        map.set(item, (map.get(item) || 0) + 1);
    }
    
    const sorted_map_to_arr = [...map].sort((a, b) => b[1] - a[1]);
    
    return sorted_map_to_arr.length === 1 || sorted_map_to_arr[0][1] > sorted_map_to_arr[1][1] ? sorted_map_to_arr[0][0] : -1;
}