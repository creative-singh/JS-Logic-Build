// Question Link: https://leetcode.com/problems/remove-duplicate-letters/

var removeDuplicateLetters = function (s) {
  let res = [];
  let len = s.length;

  let lastInd = new Array(26);
  let taken = new Array(26).fill(false);

  for (let i = 0; i < len; i++) {
    lastInd[s[i].charCodeAt() - 97] = i;
  }

  for (let i = 0; i < len; i++) {
    let alpha = s[i];
    let alphaInd = alpha.charCodeAt() - 97;

    if (!taken[alphaInd]) {
      let lett = res[res.length - 1]?.charCodeAt();
      while (
        res.length > 0 &&
        s[i] < res[res.length - 1] &&
        i < lastInd[lett - 97]
      ) {
        let letter = res.pop();
        let letterCode = letter.charCodeAt();
        taken[letterCode - 97] = false;
        lett = res?.[res.length - 1]?.charCodeAt();
      }
      res.push(s[i]);
      taken[alphaInd] = true;
    }
  }

  return res.join("");
};
