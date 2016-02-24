/*
  Imports the sort files as modules and runs them with the input array
  values.
  Calculates the runtime of given function using node.js's process.hrtime()
*/

var module_path = process.argv[2];
var module = require(module_path);
var inputArray = process.argv[3].split(',').map(Number);
var startTime = process.hrtime();
var sortedArray = module.sort(inputArray);
var stopTime = process.hrtime(startTime);

if (isSorted(sortedArray)) {
  console.log("TADA! You have sorted the array!");
} else {
  console.log("Sorry man.. It's still unsorted.");
}
console.log('Result: [' + sortedArray + ']');
console.log('Time taken: %ds %dms', stopTime[0], stopTime[1]/1000000);

function isSorted(intArray) {
  for (var i = 0; i < intArray.length; i++) {
    if (intArray[i] > intArray[i + 1]) {
      return false;
    }
  }
  return true;
}
