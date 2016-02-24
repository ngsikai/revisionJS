/* Optimized Bubble Sort
 An additional variable nbrOfSwaps is included here to improve performance
 for arrays that are already or almost sorted. With each run of the
 outer loop, a check will be performed to check if there have been any
 swaps/bubbles for the current iteration of the loop. If there aren't any,
 the array is already sorted and the function returns.
 Best case: O(n) (array is already or almost sorted)
 Average case: O(n^2)
 Worst case: O(n^2)
*/
module.exports.sort = function(intArray) {
  var arrayLength = intArray.length;
  var nbrOfSwaps = 0;
  for (var i = 0; i < arrayLength; i++) {
    for (var j = 0; j < arrayLength - 1; j++) {
      // execute swap if preceding element is larger than next
      if (intArray[j] > intArray[j + 1]) {
        var temp = intArray[j];
        intArray[j] = intArray[j + 1];
        intArray[j + 1] = temp;
        nbrOfSwaps++;
      }
    }
    if (nbrOfSwaps == 0) {
      return intArray;
    } else {
      nbrOfSwaps = 0;
    }
  }
  return intArray;
}
