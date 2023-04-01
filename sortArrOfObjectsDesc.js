let obj = [
  {
    name: "Bhavleen",
    role: 5,
  },
  {
    name: "singhKing",
    role: 4,
  },
  {
    name: "Creative",
    role: 2,
  },
  {
    name: "King",
    role: 1,
  },
  {
    name: "Singh",
    role: 3,
  },
]

function sortArrOfObj(arr) {
  for (let i = 1; i < arr.length; i++) {
    let nti = arr[i]
    let j = i - 1;
    while (j >= 0 && arr[j].role > nti.role) {
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1] = nti
  }
  return arr
}

console.log(sortArrOfObj(obj));