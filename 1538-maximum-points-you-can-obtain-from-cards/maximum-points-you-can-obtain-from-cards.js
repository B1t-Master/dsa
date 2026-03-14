/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
let l= 0
let r=cardPoints.length-k
let sum=0
// let results=0
for( let i=0; i<k; i++){
    sum+=cardPoints[cardPoints.length-1-i]
// console.log(sum)
}

let results=sum

while(r<cardPoints.length){
results= results + cardPoints[l]-cardPoints[r]

sum=Math.max(sum,results)
    r++
    l++
}
console.log(results)
console.log(sum)

return sum
};