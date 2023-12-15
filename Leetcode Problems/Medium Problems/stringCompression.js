// Question Link: https://leetcode.com/problems/string-compression

var compress = function (chars) {
  let s = "";
  let cnt = 1;
  let len = chars.length;

  for (let i = 1; i < len; i++) {
    if (chars[i - 1] == chars[i]) {
      cnt++;
    } else {
      s += chars[i - 1];
      if (cnt > 1) {
        if (cnt < 9) {
          s += cnt;
        } else {
          for (let item of cnt.toString()) {
            s += item;
          }
        }
      }
      cnt = 1;
    }
  }
  s += chars[len - 1];
  if (cnt > 1) {
    s += cnt;
  }

  for (let j = 0; j < s.length; j++) {
    chars.splice(j, 1, s[j]);
  }
  chars.splice(s.length);
};
