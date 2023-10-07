/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      let temp = image[i][j] === 1 ? 0 : 1;
      image[i][j] = temp
    }
  }
  return image
};