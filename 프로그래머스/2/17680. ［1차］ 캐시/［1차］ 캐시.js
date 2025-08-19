function solution(cacheSize, cities) {
    let cache = [];
    let time = 0;
    
    cities.forEach(city => {
        if (cache.includes(city.toLowerCase())) {
            time++;
            cache = cache.filter(data => data !== city.toLowerCase());
            cache.push(city.toLowerCase())
        } else if (cacheSize === 0) {
            time += 5;
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