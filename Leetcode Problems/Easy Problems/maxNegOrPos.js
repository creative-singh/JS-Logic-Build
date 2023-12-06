var maximumCount = function(nums) {
  let neg = countOccurence(nums, false)
  let pos = countOccurence(nums)

  return neg > pos ? neg : pos
};

function countOccurence(nums, isPos = true){
  let st = 0
  let en = nums.length - 1
  let counter = isPos ? nums.length : -1
  while(st <= en){
    let mid = Math.floor((st+en)/2)
    if(isPos){
      if(nums[mid] > 0){
        counter = mid
        en = mid - 1 
      }else{
        st = mid + 1 
      }
    } else {
      if(nums[mid] < 0) {
        counter = mid
        st = mid + 1
      }
      else en = mid - 1
    }
  }
  return isPos ? nums.length - counter : counter + 1
}


