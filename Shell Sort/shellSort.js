shellSort = (array, gaps) => {
  for (var g = 0; g < gaps.length; g++) {
    var gap = gaps[g];
    for (var i = gap; i < array.length; i++) {
      var temp = array[i];
      for (var j = i; j >= gap && array[j - gap] > temp; j -= gap) {
        array[j] = array[j - gap];
      }
      array[j] = temp;
    }
  }
  return array;
};

var array = [8, 3, 5, 9, 1, 5, 9, 2, 3, 8, 4];
var gaps = [66, 31, 14, 5, 1];
console.log(shellSort(array, gaps));
