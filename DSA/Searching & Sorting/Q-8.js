/*Given three arrays sorted in non-decreasing order, print all common elements in these arrays.
ar1[] = {1, 5, 10, 20, 40, 80} 
ar2[] = {6, 7, 20, 80, 100} 
ar3[] = {3, 4, 15, 20, 30, 70, 80, 120} 
Output: 20, 80 */

let  findCommonElements = function(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    let commonElements = [];
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
        // If all three elements are equal, it's a common element.
        commonElements.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) {
        // Increment the index of the smallest element among the three arrays.
        i++;
      } else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return commonElements;
  }
  
  // Example usage:
  const ar1 = [1, 5, 10, 20, 40, 80];
  const ar2 = [6, 7, 20, 80, 100];
  const ar3 = [3, 4, 15, 20, 30, 70, 80, 120];
  
  const commonElements = findCommonElements(ar1, ar2, ar3);
  console.log(commonElements); // Output: [20, 80]
  