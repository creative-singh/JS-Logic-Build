// Question Link: https://leetcode.com/problems/koko-eating-bananas

var minEatingSpeed = function (piles, h) {
  let len = piles.length;
  let low = 1;
  let high = findMax(piles, len);

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (canEatAll(piles, mid, h, len)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

function canEatAll(piles, mid, h, len) {
  let eatenBanana = 0;
  for (let i = 0; i < len; i++) {
    eatenBanana += Math.floor(piles[i] / mid);
    if (piles[i] % mid != 0) {
      eatenBanana++;
    }
  }
  return eatenBanana <= h;
}

function findMax(piles, len) {
  let max = piles[0];
  for (let i = 1; i < len; i++) {
    if (max < piles[i]) {
      max = piles[i];
    }
  }
  return max;
}
