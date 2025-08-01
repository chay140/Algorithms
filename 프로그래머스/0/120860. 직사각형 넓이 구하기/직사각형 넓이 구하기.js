function solution(dots) {
    const XSet = new Set();
    const YSet = new Set();
    
    dots.forEach(([x, y]) => {
        XSet.add(x);
        YSet.add(y);
    })
    
    const Xarray = Array.from(XSet.values());
    const Yarray = Array.from(YSet.values());
    
    return Math.abs(Xarray[0] - Xarray[1]) * Math.abs(Yarray[0] - Yarray[1]);
}