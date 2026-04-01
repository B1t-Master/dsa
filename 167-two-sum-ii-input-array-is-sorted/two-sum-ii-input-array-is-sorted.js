/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let l=0
    let r=numbers.length-1
    while(l<=numbers.length-1){
    let sum=numbers[l]+numbers[r]
    console.log(l)
    console.log(r)
    if(sum===target){

        return [l+1,r+1]
    }
    
    if(sum<target){
         l++
         continue
        
    }

    if(sum>target){
        r--
        continue
    }

    }
}

