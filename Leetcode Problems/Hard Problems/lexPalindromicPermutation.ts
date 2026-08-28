// Question Link: https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target
// 3734. Lexicographically Smallest Palindromic Permutation Greater Than Target

function lexPalindromicPermutation(s: string, target: string): string {
    const n = s.length;
    let freq = new Array(26).fill(0);
    for (const ch of s) freq[ch.charCodeAt(0) - 97]++;

    let oddCount = 0;
    for (const x of freq) if (x % 2 === 1) oddCount++;
    if (oddCount > 1) return "";

    const buildMinPal = (f) => {
        let left = "", mid = "";
        for (let c = 0; c < 26; c++) {
            if (f[c] % 2 === 1) mid = String.fromCharCode(97 + c);
            left += String.fromCharCode(97 + c).repeat(f[c] / 2);
        }
        const rev = left.split('').reverse().join('');
        return left + mid + rev;
    };

    const minPal = buildMinPal([...freq]);
    if (minPal > target) return minPal;

    const half = Math.floor(n / 2);
    let oddChar = -1;
    for (let c = 0; c < 26; c++) {
        if (freq[c] % 2 === 1) {
            oddChar = c;
            break;
        }
    }

    let leftHalf = new Array(half).fill(''), result = "";

    const fillRemaining = (pos, f) => {
        for (let i = pos; i < half; i++) {
            let placed = false;
            for (let c = 0; c < 26; c++) {
                if (f[c] >= 2) {
                    f[c] -= 2;
                    leftHalf[i] = String.fromCharCode(97 + c);
                    placed = true;
                    break;
                }
            }
            if (!placed) return false;
        }
        return true;
    };

    const dfs = (pos, f, greater) => {
        if (pos === half) {
            let left = leftHalf.join(''), rev = left.split('').reverse().join(''), full = left + rev;
            if (n % 2 === 1) {
                if (oddChar === -1 || f[oddChar] === 0) return false;
                full = left + String.fromCharCode(97 + oddChar) + rev;
            }
            if (full > target) {
                result = full;
                return true;
            }
            return false;
        }

        if (greater) {
            const fCopy = [...f];
            if (fillRemaining(pos, fCopy)) {
                let left = leftHalf.join(''), rev = left.split('').reverse().join(''), full = left + rev;
                if (n % 2 === 1) {
                    if (oddChar === -1 || fCopy[oddChar] === 0) return false;
                    full = left + String.fromCharCode(97 + oddChar) + rev;
                }
                if (full > target) {
                    result = full;
                    return true;
                }
            }
            return false;
        }

        const cTarget = target.charCodeAt(pos) - 97;
        if (f[cTarget] >= 2) {
            const fNew = [...f];
            fNew[cTarget] -= 2;
            leftHalf[pos] = String.fromCharCode(97 + cTarget);
            if (dfs(pos + 1, fNew, false)) return true;
        }

        for (let c = cTarget + 1; c < 26; c++) {
            if (f[c] >= 2) {
                const fNew = [...f];
                fNew[c] -= 2;
                leftHalf[pos] = String.fromCharCode(97 + c);
                if (dfs(pos + 1, fNew, true)) return true;
            }
        }
        return false;
    };

    dfs(0, [...freq], false);
    return result;
};
