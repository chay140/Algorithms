function solution(numbers) {
    // https://sumin-k.medium.com/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-javascript-%EC%99%84%EC%A0%84-%ED%83%90%EC%83%89-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0-1fdcdca4f59b
    let answer = new Set(); // answer로 new Set()
    let nums = numbers.split('');
    
    // 소수 판별
    const isPrime = (num) => {
        if(num <= 1) return false;
        if (num === 2) return true;
        for(let i = 2; i * i <= num; i++) {
            if(num % i === 0) return false;
        } 
        return true; 
    }

    
    // 가능한 숫자
    const getPermutation = (arr, fixed) => {
        if(arr.length >= 1) {
            for (let i=0; i<arr.length; i++) {
                const newFixed = fixed + arr[i];
                const copyArr = [...arr];
                copyArr.splice(i, 1);
                
                if(isPrime(parseInt(newFixed))) {
                    answer.add(parseInt(newFixed));
                }
                
                getPermutation(copyArr, newFixed);
            }
        }
    }
    
    getPermutation(nums, '');
    
    return answer.size;
}