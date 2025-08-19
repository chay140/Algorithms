function solution(cacheSize, cities) {
    // O(1)
    if (cacheSize === 0) return 5 * cities.length;
    
    let cache = [];
    let time = 0;
    
    cities.forEach(city => {
        if (cache.includes(city.toLowerCase())) {
            time++;
            cache = cache.filter(data => data !== city.toLowerCase());
            cache.push(city.toLowerCase())
        } else {
            time += 5;
            if (cache.length >= cacheSize) {
                cache.shift();
            } 
            cache.push(city.toLowerCase());
        }
    })
    return time;
}