/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    /** define an empty set */
    let numObj={};
    /** for loop */
    for( let i=0 ; i<nums.length; i++ ){
        /** complement means the gap between the pointer and the target */
        let complement=target-nums[i];
        if(numObj[complement]!==undefined){
            return [nums[complement],i];
        } 
        numObj[nums[i]]=i;
    }
};