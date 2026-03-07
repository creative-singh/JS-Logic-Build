// Question Link: https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating
// 1888. Minimum Number of Flips to Make the Binary String Alternating

function minFlips(s: string): number {
    const n = s.length, t = s + s;
    
    let mis = 0, ans = n;

    for(let i = 0; i < 2 * n; i++) {
        const expected = (i % 2 == 0) ? "0" : "1"

        if(t[i] !== expected) mis++

        if(i >= n) {
            const left = i - n;
            const expLeft = (left % 2 == 0) ? "0" : "1"
            if(t[left] !== expLeft) mis--
        }

        if(i >= n - 1) {
            const mis1 = n - mis;
            ans = Math.min(ans, Math.min(mis, mis1))
        }
    }
    
    return ans;
};
