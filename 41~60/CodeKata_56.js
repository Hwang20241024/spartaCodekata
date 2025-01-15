//// 바탕화면 정리


function solution(wallpaper) {
    let minRow = wallpaper.length;
    let maxRow = 0;
    let minCol = wallpaper[0].length;
    let maxCol = 0;
    
    // 바탕화면을 순차적으로 탐색하여 '#'이 있는 위치를 찾음
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                minRow = Math.min(minRow, i);
                maxRow = Math.max(maxRow, i);
                minCol = Math.min(minCol, j);
                maxCol = Math.max(maxCol, j);
            }
        }
    }
    
    // 드래그 범위를 반환 (최소/최대 값)
    return [minRow, minCol, maxRow + 1, maxCol + 1];
}