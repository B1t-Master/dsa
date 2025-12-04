/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drankBottles=0
    while (numBottles>=numExchange){
        numBottles-=numExchange
        drankBottles+=numExchange
        numBottles++
    }
    return drankBottles+numBottles
};