/* Conventional Bubble Sort
 Let n be the number of elements in the given array
 For every i-th run of the outer loop, the n-ith largest element will
 be bubbled up to it's correct position.
 Hence the outer loop runs n times to ensure that the array becomes sorted.
 Best case: O(n^2)
 Average case: O(n^2)
 Worst case: O(n^2)
*/
module.exports.sort = function(intArray) {
  var arrayLength = intArray.length;
  for (var i = 0; i < arrayLength; i++) {
    for (var j = 0; j < arrayLength - 1; j++) {
      // execute swap if preceding element is larger than next
      if (intArray[j] > intArray[j + 1]) {
        var temp = intArray[j];
        intArray[j] = intArray[j + 1];
        intArray[j + 1] = temp;
      }
    }
  }
  return intArray;
}
