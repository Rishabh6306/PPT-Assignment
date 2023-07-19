/*Given an array of integer nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If the target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4] */

function findStartAndEndPositions(nums, target) {
    function binarySearch(nums, target, findLeft) {
      let left = 0;
      let right = nums.length - 1;
      let result = -1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
  
        if (nums[mid] === target) {
          result = mid;
          if (findLeft) right = mid - 1; // Look for the leftmost occurrence
          else left = mid + 1; // Look for the rightmost occurrence
        } else if (nums[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
  
      return result;
    }
  
    const startIndex = binarySearch(nums, target, true);
    const endIndex = binarySearch(nums, target, false);
  
    return [startIndex, endIndex];
  }
  
  // Example usage:
  const nums = [5, 7, 7, 8, 8, 10];
  const target = 8;
  const result = findStartAndEndPositions(nums, target);
  console.log(result); // Output: [3, 4]
  