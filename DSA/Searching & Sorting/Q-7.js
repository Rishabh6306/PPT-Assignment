/*Given an array of integers, find the inversion of an array. Formally, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j.
N=5, arr[] = {2, 4, 1, 3, 5}
Output: 3
Explanation: (2,1) (4,1) and (4,3) forms an inversion in an array */


let  countInversions = function(arr) {
    let inversions = 0; // Variable to store the count of inversions
  
    // Merge two sorted subarrays while counting inversions
    function mergeAndCount(left, right) {
      let merged = []; // Merged array to store sorted elements
      let l = 0; // Pointer for the left subarray
      let r = 0; // Pointer for the right subarray
  
      // Merge elements from left and right subarrays in sorted order
      while (l < left.length && r < right.length) {
        if (left[l] <= right[r]) {
          merged.push(left[l]);
          l++;
        } else {
          // If the element in the left subarray is greater than the one in the right subarray,
          // then it forms inversions with all remaining elements in the left subarray.
          merged.push(right[r]);
          r++;
          inversions += left.length - l;
        }
      }
  
      // Append any remaining elements from left and right subarrays
      return [...merged, ...left.slice(l), ...right.slice(r)];
    }
  
    // Merge sort and count inversions
    function mergeSortAndCount(arr) {
      // Base case: If the array has one element or is empty, return it
      if (arr.length <= 1) return arr;
  
      // Divide the array into two halves
      const mid = Math.floor(arr.length / 2);
      const left = mergeSortAndCount(arr.slice(0, mid)); // Sort and count inversions in the left half
      const right = mergeSortAndCount(arr.slice(mid)); // Sort and count inversions in the right half
  
      // Merge the sorted subarrays and count inversions while doing so
      return mergeAndCount(left, right);
    }
  
    mergeSortAndCount(arr); // Sort the array and count inversions
    return inversions; // Return the total count of inversions
  }
  
  // Example usage:
  const arr = [2, 4, 1, 3, 5];
  const inversions = countInversions(arr);
  console.log(inversions); // Output: 3
  