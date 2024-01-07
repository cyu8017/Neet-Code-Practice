/**
 * @description
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * 
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 * 
 * @param {number[]}
 * @return {number}
 */

var singleNumber = function(nums) {
  let result = 0;

  for (let num of nums) {
      result ^= num;
  }
  
  return result;
};