// Question Link: https://leetcode.com/problems/compare-version-numbers
// 165. Compare Version Numbers

var compareVersion = function(version1, version2) {
    let v1 = 0; let v2 = 0;
    let v1Arr = version1.split(".");
    let v2Arr = version2.split(".");
    let v1Len = v1Arr.length;
    let v2Len = v2Arr.length;

    while(v1 < v1Len && v2 < v2Len) {
        if(Number(v1Arr[v1]) < Number(v2Arr[v2])) {
            return -1;
        } else if(Number(v1Arr[v1]) > Number(v2Arr[v2])) {
            return 1;
        } else {
            v1++; v2++;
        }
    }
    while(v1 < v1Len) {
        if(Number(v1Arr[v1]) > 0) {
            return 1;
        } else {
            v1++
        }
    }
    while(v2 < v2Len) {
        if(0 < Number(v2Arr[v2])) {
            return -1;
        } else {
            v2++
        }
    }
    return 0;
};
