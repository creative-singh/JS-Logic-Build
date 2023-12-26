// Question Link: https://leetcode.com/problems/minimum-time-to-complete-trips/

var minimumTime = function (time, totalTrips) {
  let len = time.length;
  let low = 1;
  let high = getMin(time, len) * totalTrips;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (busTrip(time, totalTrips, mid, len)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
};

function busTrip(time, totalTrips, mid, len) {
  let trips = 0;
  for (let i = 0; i < len; i++) {
    trips += Math.floor(mid / time[i]);
  }
  return trips >= totalTrips;
}

function getMin(time, len) {
  let min = time[0];
  for (let i = 1; i < len; i++) {
    if (time[i] < min) {
      min = time[i];
    }
  }
  return min;
}
