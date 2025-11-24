// Question Link: https://leetcode.com/problems/binary-prefix-divisible-by-5
// 1018. Binary Prefix Divisible By 5

var prefixesDivBy5 = function (arr) {
	let n = arr.length;

	let resArr = [];

	let bin = 0;
	arr.forEach((x, i) => {
		bin = (bin << 1) + x;
		bin = bin % 5;
		resArr.push(bin === 0);
	});

	return resArr;
};
