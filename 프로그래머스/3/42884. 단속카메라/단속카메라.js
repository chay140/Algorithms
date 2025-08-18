function solution(routes) {
    // 차량들을 진출 지점 기준으로 정렬 (O(n log n))
    routes.sort((a, b) => a[1] - b[1]);
    
    let count = 0;
    let lastCamera = -30001; // 가능한 최소값보다 작은 값으로 초기화
    
    // 각 차량의 경로를 확인 (O(n))
    for (const route of routes) {
        // 현재 차량이 마지막 카메라를 만나지 않는 경우
        if (route[0] > lastCamera) {
            // 새 카메라를 설치 (현재 차량의 진출 지점에)
            lastCamera = route[1];
            count++;
        }
    }
    
    return count;  
}