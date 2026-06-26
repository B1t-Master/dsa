/**
 * @param {number[]} nums
 */

var NumArray = function(nums) {
    // let 
    // this.NumArray=nums
    this.prefixArray = [nums[0]]
    for(let i=0;i<nums.length-1;i++){
    // console.log(prefixArray)
        let item= nums[i+1]+this.prefixArray[i]
        this.prefixArray.push(item)
        // this.prefixArray.push(4)
    }
    // return {nums,prefixArray}
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
        console.log(this.prefixArray)
        // console.log(p)
    if(left===0) return this.prefixArray[right]
    return this.prefixArray[right]-this.prefixArray[left-1]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */