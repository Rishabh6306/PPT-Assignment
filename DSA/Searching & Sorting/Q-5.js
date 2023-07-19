/*Find the majority element in the array. A majority element in an array A[] of size n is an element that appears more than n/2 times (and hence there is at most one such element). 
Input: A[]={3, 3, 4, 2, 4, 4, 2, 4, 4}
Output: 4
Explanation: The frequency of 4 is 5 which is greater than half of the size of the array size.  */

function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;
  
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
        count = 1;
      } else if (num === candidate) {
        count++;
      } else {
        count--;
      }
    }
  
    return candidate;
  }
  
  // Example usage:
  const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
  const majorityElement = findMajorityElement(nums);
  console.log(majorityElement); // Output: 4
  